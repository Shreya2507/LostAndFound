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
            <Route path="/Notes">
              <Notes />
            </Route>
            <Route path="/Doubt">
              <Doubt />
            </Route>
            <Route path="/PYQ">
              <PYQ />
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
