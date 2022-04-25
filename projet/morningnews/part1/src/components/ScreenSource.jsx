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
                  <Avatar src='#' />
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