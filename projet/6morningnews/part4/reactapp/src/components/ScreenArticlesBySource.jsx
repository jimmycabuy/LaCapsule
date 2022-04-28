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
        `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=f588bacf9c9e41adb12cb1223d34402d`
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
                  onClick={() => props.addToWishList(articleBySource)}
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

function mapDispatchToProps(dispatch) {
  return {
    addToWishList: function (article) {
      dispatch({ type: "addArticle", articleLiked: article });
    },
  };
}

// export default ScreenArticlesBySource;

export default connect(null, mapDispatchToProps)(ScreenArticlesBySource);