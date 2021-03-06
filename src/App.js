import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  HashRouter,
  Route,
  // Link,
  // Switch,
  // NavLink,
} from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Logout from "./components/Logout";


class App extends Component {
  render() {
    return (

    <HashRouter>
      <>
        <Route exact path='/' component={Home} />
        <Route path='/Register' component={Register} />
        <Route path='/logIn' component={LogIn} />
        <Route path='/Logout' component={Logout} />
      </>
    </HashRouter>
  )}

}
export default App;
