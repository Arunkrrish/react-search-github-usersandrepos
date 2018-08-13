import React, { Component } from 'react';
import Home from './home';
import Githubuser from './githubuser';
import Githubrepos from './githubrepos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/githubuser" component={Githubuser}></Route> 
        <Route path="/githubrepos" component={Githubrepos}></Route>
    </Switch>
    </Router>
        </div>
    );
  }
}

export default App;
