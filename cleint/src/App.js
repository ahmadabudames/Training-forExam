import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';

import {
  BrowserRouter,
  Switch,
  Route,
  

} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/favorite">
            <Favorite/>
          </Route>
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
