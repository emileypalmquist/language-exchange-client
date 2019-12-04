import React from 'react';
import Home from './containers/Home'
import Welcome from './containers/Welcome'
import Signup from './containers/SignUp';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null,
    }

  }


  render() {
    const {user, signUpClick} = this.state

    return (
      
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route  path="/signup" component={Signup} />
            <Route  path="/home" component={Home} />
            </Switch>
        </Router>
      </div>

    );
  }
}
 
export default App;
