import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostDetails from './pages/BlogDetails';
import NavBar from './components/Navbar';

const App = () => (
  <Router>
    <NavBar />

    <Switch>
      <Route path="/blog/:id">
        <BlogPostDetails />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
