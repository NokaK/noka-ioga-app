import React from 'react';
import { Provider } from 'react-redux'
import store  from  './store/store'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar  from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog'



class App extends React.Component {
  render (){
    return (
    <Provider store={store}>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Blog">
            <Blog/>
          </Route>
          <Route path="/blogDetails">
          blogDetails
          </Route>  
        </Switch>
      </Router>  
    </Provider>
    )
  }
 }

export default App;
