import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './pages/Home';

const MainRouter = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
);

export default MainRouter;
