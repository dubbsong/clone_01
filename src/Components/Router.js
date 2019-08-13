import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Nav from './Nav';
import Movie from 'Routes/Movie';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        path="https://dubbsong.github.io/clone_01/"
        exact
        component={Movie}
      />
      <Route path="https://dubbsong.github.io/clone_01/tv" component={TV} />
      <Route
        path="https://dubbsong.github.io/clone_01/search"
        component={Search}
      />
      <Route
        path="https://dubbsong.github.io/clone_01/movie/:id"
        component={Detail}
      />
      <Route
        path="https://dubbsong.github.io/clone_01/show/:id"
        component={Detail}
      />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
