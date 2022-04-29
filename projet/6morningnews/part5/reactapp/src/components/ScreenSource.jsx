import React, { useState, useEffect } from "react";
import "../App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ScreenSource(props) {
  const [sourceList, setSourceList] = useState([]);

  async function loadSource(country) {
    var rawResponse = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=7f4f30e7e1a547a1bd9085d3c96aef0b&country=${country}`
    );
    var response = await rawResponse.json();
    var sourcesFromAPI = response.sources.map((sourceAPI) => {
      return {
        source: sourceAPI.name,
        description: sourceAPI.description,
        id: sourceAPI.id,
        category: sourceAPI.category,
      };
    });
    setSourceList(sourcesFromAPI);
    console.log(sourcesFromAPI);

  }
  
  // async function getArticles() {
  //   console.log(props.token)
  //   var data = await fetch (`/wishlist/${props.token}`)
  //   var body = await data.json()
  //   if(body.result && body.articles){
  //     props.importArticles(body.articles)
  //   }
  // }

  useEffect(() => {
    loadSource("fr");
    // getArticles();
  }, [props.token]);

  return (
    <div>
      <Nav />
      <div className="Banner">
        <img
          src="./images/france.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("fr")}
          alt="france"
        />
        <img
          src="./images/angleterre.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("gb")}
          alt="angleterre"
        />
        <img
          src="./images/ireland.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("ie")}
          alt="ireland"
        />
        <img
          src="./images/usa.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("us")}
          alt="usa"
        />
        <img
          src="./images/india.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("in")}
          alt="india"
        />
        <img
          src="./images/italy.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("it")}
          alt="italy"
        />
        <img
          src="./images/brazil.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("br")}
          alt="brazil"
        />
        <img
          src="./images/australia.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("au")}
          alt="australia"
        />
        <img
          src="./images/germany.png "
          style={{ width: "40px", cursor: "pointer" }}
          onClick={() => loadSource("de")}
          alt="germany"
        />
      </div>
      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={(item, i) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`/images/${item.category}.png`} />}
                title={
                  <Link to={`/screenarticlesbysource/${item.id}`} key={i}>
                    {item.source}
                  </Link>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}


function mapDispatchToProps (dispatch){
  return {
    importArticles : function(articles){
      dispatch({type: "importArticles", articles})
    }
  }
}

function mapStateToProps(state) {
  return { myArticles: state.wishlist, token: state.token };
}

export default connect(
  mapDispatchToProps,
  mapStateToProps,
  // null
)(ScreenSource);
