import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Lostitm from './Components/Lostitm';
import Founditm from './Components/Founditm';
import Report from './Components/Report';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/lost-items">
              <Lostitm />
            </Route>
            <Route path="/found-items">
              <Founditm />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
