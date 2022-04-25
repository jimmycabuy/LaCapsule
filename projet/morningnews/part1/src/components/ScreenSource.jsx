import React, { useState, useEffect } from "react";
import "../App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";

function ScreenSource() {

  const [sourceList, setSourceList] = useState([]);

  useEffect(() => {
    async function loadSource() {
      var rawResponse = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=e1af60fe24304a10815b363c551f94ea&country=fr&language=fr");
      var response = await rawResponse.json();
      // setSourceList(response);

      var sourcesFromAPI = response.sources.map((sourceAPI) => {
        return { source: sourceAPI.name, description: sourceAPI.description };
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
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src='#' />
                }
                title={item.source}
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