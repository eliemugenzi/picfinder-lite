import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

const MainRouter = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
    </Switch>
  </Router>
);

export default MainRouter;
