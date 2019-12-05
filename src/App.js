import React from 'react';
import Home from './containers/Home'
import Welcome from './containers/Welcome'
import Signup from './containers/SignUp';
import NativeLang from './components/NativeLang';
import LearnLang from './components/LearnLang';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      user: null,
      auth: { currentUser: {} }
    }

  }

  handleUserLogin = user => {
    const currentUser = { currentUser: user.user };
    localStorage.setItem('token', user.jwt);

    this.setState({ auth: currentUser });
  }


  render() {
    const {user} = this.state

    return (
      
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Welcome {...props} handleLogin={this.handleLogin}/>} />
            <Route exact path="/signup" render={(props) => <Signup {...props}/>}/>
            <Route exact path="/native-languages" render={(props) => <NativeLang {...props}/>} />
            <Route exact path="/learn-languages" render={(props) => <LearnLang {...props}/>}  />
            <Route exact path="/home" render={(props) => <Home {...props}/>} />
            </Switch>
        </Router>
      </div>

    );
  }
}
 
export default App;
