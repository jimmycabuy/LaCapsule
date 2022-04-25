import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import ScreenHome from "./components/ScreenHome.jsx";
import ScreenMyArticles from "./components/ScreenMyArticles.jsx";
import ScreenArticlesBySource from "./components/ScreenArticlesBySource.jsx";
import ScreenSource from "./components/ScreenSource.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" from component={ScreenHome}/>
        <Route path="/screenmyarticles" from component={ScreenMyArticles}/>
        <Route path="/screenarticlesbysource" from component={ScreenArticlesBySource}/>
        <Route path="/screensource" from component={ScreenSource}/>
      </Switch>
    </Router>
  );
}

export default App;