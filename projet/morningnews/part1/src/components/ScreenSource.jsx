import React, { useState, useEffect } from "react";
import "../App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function ScreenSource() {

  const [sourceList, setSourceList] = useState([]);

  useEffect(() => {
    async function loadSource() {
      var rawResponse = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=77fb885ad79242c49d08b6de58756859&country=fr&language=fr");
      var response = await rawResponse.json();

      var sourcesFromAPI = response.sources.map((sourceAPI) => {
        return { source: sourceAPI.name, description: sourceAPI.description, id: sourceAPI.id };
      });
      setSourceList(sourcesFromAPI);
      console.log(sourcesFromAPI);
    }
    loadSource();
  }, []);

  return (
    <div>
      <Nav />

      <div className="Banner" />

      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={(item, i) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src='https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-1/174462546_10158472930193878_8712075659054406020_n.jpg?stp=c0.4.312.312a_dst-jpg_p320x320&_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=F-VN4Jq8XCgAX96LqvA&_nc_ht=scontent-bru2-1.xx&oh=00_AT_SiDNnDjNLt5yLgWdbvJxZ7WQG90DJYKB9rNChjpb4Jg&oe=628B4C91' />
                }
                title={<Link to={`/screenarticlesbysource/${item.id}`} key={i}>{item.source}</Link>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ScreenSource;