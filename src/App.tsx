import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/simple-line-icons.css';
import './App.scss';

import ScrollToTop from './ScrollToTop';
import Header from './sections/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import Error404 from './pages/Error404';

function App() {
  
  return (<Router>
    <ScrollToTop />
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/project/:tag/:slug" exact={false} component={Project} />
      <Route path="*" component={Error404} />
    </Switch>
  </Router>);
}

export default App;
