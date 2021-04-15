
import React, { Component } from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
      {/* exact 路由严格匹配，
      Exact routing is strictly matched
       */}
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
    </Router>
     );
  }
}
 
export default App;

