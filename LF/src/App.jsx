import React from 'react';
import './App.css'
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  <div>
    <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/HOME">
              <App />
            </Route>
            <Route path="/LOST ITEMS">
              <Lostitm />
            </Route>
            <Route path="/FOUND ITEMS">
              <Founditm />
            </Route>
            <Route path="/REPORT">
              <Report />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  </div>
}

export default App
