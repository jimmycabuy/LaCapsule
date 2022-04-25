import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: "column", height: '100vh' }}>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;