import React, { useState, useEffect } from "react";
import "../App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";
import { connect } from "react-redux";

const { Meta } = Card;

function ScreenMyArticles(props) {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [noArticle, setNoArticle] = useState("");

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

  useEffect(() => {
    async function load() {
      if (props.myArticles.length === 0) {
        setNoArticle("Il n'y a pas d'articles dans votre wishlist");
      }
    }
    load();
  });

  return (
    <div>
      <Nav />
      <div className="Banner" />
      <div className="Card">
        <span style={{color: "red", fontSize:"25px", paddingTop:"20px", fontFamily:"'Poppins', sans-serif"}}>{noArticle}</span>
        {props.myArticles.map((articleWishlist, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: 300,
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              cover={<img alt="example" src={articleWishlist.urlToImage} />}
              actions={[
                <Icon
                  type="read"
                  key="ellipsis2"
                  onClick={() =>
                    showModal(articleWishlist.title, articleWishlist.content)
                  }
                />,
                <Icon
                  type="delete"
                  key="ellipsis"
                  onClick={() => props.removeToWishList(articleWishlist)}
                />,
              ]}
            >
              <Meta
                title={articleWishlist.title}
                description={articleWishlist.description}
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
  return { myArticles: state.wishlist };
}

function mapDispatchToProps(dispatch) {
  return {
    removeToWishList: function (article) {
      dispatch({ type: "removeArticle", articleRemoved: article });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(ScreenMyArticles);

// export default ScreenMyArticles;
