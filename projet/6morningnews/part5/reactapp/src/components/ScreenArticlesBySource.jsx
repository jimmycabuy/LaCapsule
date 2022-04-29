import React, { useState, useEffect } from "react";
import "../App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const { Meta } = Card;

function ScreenArticlesBySource(props) {
  const [articleBySourceList, setSarticleBySourceList] = useState([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  var { id } = useParams();

  useEffect(() => {
    async function loadArticlesBySource() {
      var rawResponse2 = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=7f4f30e7e1a547a1bd9085d3c96aef0b`
      );
      var response2 = await rawResponse2.json();
      setSarticleBySourceList(response2.articles);
    }
    loadArticlesBySource();
  });

  const showModal = (title, content) => {
    setIsModalVisible(true);
    setArticleTitle(title);
    setArticleContent(content);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  var addToWishList = async function (article) {
    props.addToWishList(article);
    await fetch("/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `articleTitle=${article.title}&articleImage=${article.urlToImage}&articleDescription=${article.description}&articleContent=${article.content}&token=${props.token}`,
    });
  };

  return (
    <div>
      <Nav />

      <div className="Banner" />

      <div className="Card">
        {articleBySourceList?.map((articleBySource, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: 300,
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              cover={<img alt="example" src={articleBySource.urlToImage} />}
              actions={[
                <Icon
                  type="read"
                  key="ellipsis2"
                  onClick={() =>
                    showModal(articleBySource.title, articleBySource.content)
                  }
                />,
                <Icon
                  type="like"
                  key="ellipsis"
                  onClick={() => addToWishList(articleBySource)}
                />,
              ]}
            >
              <Meta
                title={articleBySource.title}
                description={articleBySource.description}
              />
            </Card>
          </div>
        ))}
        <Modal
          title={articleTitle}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{articleContent}</p>
        </Modal>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { token: state.token };
}

// var userToken = "OY7up";

function mapDispatchToProps(dispatch, props) {
  return {
    addToWishList: async function (article) {
      dispatch({ type: "addArticle", articleLiked: article });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(ScreenArticlesBySource);
