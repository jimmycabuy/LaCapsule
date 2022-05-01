import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { List, Avatar } from 'antd';
import Nav from './Nav'
import { connect } from 'react-redux';

function ScreenSource(props) {

  const [sourceList, setSourceList] = useState([])
  const [selectedLang, setSelectedLang] = useState(props.selectedLang)


  useEffect(() => {
    const APIResultsLoading = async () => {
      var langue = 'fr'
      var country = 'fr'

      if (selectedLang == 'en') {
        var langue = 'en'
        var country = 'us'
      }
      props.changeLang(selectedLang)
      const data = await fetch(`https://newsapi.org/v2/sources?language=${langue}&country=${country}&apiKey=ac5873da9223433c91ff04e9f46c5dd9`)
      const body = await data.json()
      setSourceList(body.sources)
    }

    APIResultsLoading()
  }, [selectedLang])

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetch(`/wishlist/${props.token}`)

      const body = await data.json()
      if (body.result && body.articles) {
        props.importArticles(body.articles)
      }
    }

    getArticles()
  }, [])

  return (
    <div>
      <Nav />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="Banner">
        <img style={{ width: '40px', margin: '10px', cursor: 'pointer' }} src='/images/fr.png' onClick={() => setSelectedLang('fr')} />
        <img style={{ width: '40px', margin: '10px', cursor: 'pointer' }} src='/images/uk.png' onClick={() => setSelectedLang('en')} />
      </div>

      <div className="HomeThemes">

        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={source => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`/images/${source.category}.png`} />}
                title={<Link to={`/screenarticlesbysource/${source.id}`}>{source.name}</Link>}
                description={source.description}
              />
            </List.Item>
          )}
        />


      </div>

    </div>
  );
}

function mapStateToProps(state) {
  return { selectedLang: state.selectedLang, token: state.token }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLang: function (selectedLang) {
      dispatch({ type: 'changeLang', selectedLang: selectedLang })
    },
    importArticles: function (articles) {
      dispatch({ type: 'importArticles', articles })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenSource)
