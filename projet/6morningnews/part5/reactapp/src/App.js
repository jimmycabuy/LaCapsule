import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import ScreenHome from "./components/ScreenHome.jsx";
import ScreenMyArticles from "./components/ScreenMyArticles.jsx";
import ScreenArticlesBySource from "./components/ScreenArticlesBySource.jsx";
import ScreenSource from "./components/ScreenSource.jsx";
import "./App.css";
import wishlist from "./reducers/article.js";
import token from "./reducers/token.js";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const magasin = createStore(combineReducers({ wishlist, token }));

export default function App() {
  return (
    <Provider store={magasin}>
      <Router>
        <Switch>
          <Route exact path="/" from component={ScreenHome} />
          <Route path="/screenmyarticles" from component={ScreenMyArticles} />
          <Route path="/screenarticlesbysource/:id" from component={ScreenArticlesBySource} />
          <Route path="/screensource" from component={ScreenSource} />
        </Switch>
      </Router>
    </Provider>
  );
}