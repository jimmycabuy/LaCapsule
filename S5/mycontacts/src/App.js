import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [dataStatus, setDataStatus] = useState([]);
  useEffect(() => {
    async function loadData() {
      var rawResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      var response = await rawResponse.json();
      var allUsers = [];
      for (var i = 0; i < response.length; i++) {
        console.log(response[i].name);
        allUsers.push(response[i].name);
      }
      setDataStatus(allUsers);
    }
    loadData();
  }, []);

  return (
    <div className="App">
      <p>{dataStatus}</p>
    </div>
  );
}

export default App;
