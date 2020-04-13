import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/simple-line-icons.css';
import './App.css';

import ScrollToTop from './ScrollToTop';
import Header from './sections/Header';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (<React.Fragment>
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/project/:tag/:slug" exact={false}>
          <Project />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>);
}

export default App;
