import React from 'react';
import Home from './containers/Home'
import Welcome from './containers/Welcome'
import Signup from './containers/SignUp';
import Profile from './components/Profile'
// import User from './components/User'
import Appointments from './components/Appointments'
import EditProfile from './components/EditProfile'
import NativeLang from './components/NativeLang';
import LearnLang from './components/LearnLang';
import Availability from './components/Availability';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      user: null,
      users: [],
      fluencies: [],
      language: '',
      filterUsers: false,
      auth: { currentUser: {} }
    }
    this.allUser = []
  }

  
  handleSignOut = () => {
    localStorage.clear();
    this.setState({
      user: null
    })
  }
  

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => {
      this.allUser = users;
      this.setState({
        users
      })
    })
    this.reAuth();
  }

  reAuth = () => {
    fetch('http://localhost:3000/reauth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
      }
    })
      .then(resp => resp.json())
      .then(user => this.setState({
        user: user.user
      }))
  }

  handleLangChange = (e) => {
    this.setState({
      language: e.target.value,
      filterUsers: true
    })
    this.filterUsers(e.target.value)
  }

  filterUsers = (language) => {
    const newArray = this.allUser.filter( user => {
      const newArray1 = user.languages.map(lang => lang.name)
      if (newArray1.includes(language)){
        return user
      }
    })
    this.setState({
      users: newArray
    })
  }


  checkUserFilter = () => {
    if (this.state.filterUsers) {
      return this.state.users
    } else {
      return this.allUser
    }
  }

  clearFilter = () => {
    this.setState({
      filterUsers: false
    })
  }

  handleUserLogin = user => {
  
    const currentUser = {currentUser: user.user} ;
    localStorage.setItem('token', user.jwt);
    
    this.setState({ 
      auth: currentUser,
      user: user.user
    });
  }


  render() {

    const {user} = this.state
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Welcome {...props} handleUserLogin={this.handleUserLogin}/>} />
              <Route exact path="/signup" render={(props) => <Signup {...props}/>}/>
              <Route exact path="/native-languages" render={(props) => <NativeLang {...props}/>} />
              <Route exact path="/learn-languages" render={(props) => <LearnLang {...props}/>}  />
              <Route exact path="/availability"  render={(props) => <Availability reAuth={this.reAuth} {...props}/>}  />
              { user ? 
              <>
                <Route  path="/home" render={(props)=> (<Home users={this.checkUserFilter()} user={user} reAuth={this.reAuth} handleLangChange={this.handleLangChange} handleSignOut={this.handleSignOut} clearFilter={this.clearFilter} {...props}/>)} />
                <Route exact path="/profile" render={() => <Profile user={user} handleSignOut={this.handleSignOut}/>} />
                <Route exact path="/appointments" render={() => <Appointments user={user} handleSignOut={this.handleSignOut}/>} />
                <Route exact path="/editprofile" component={EditProfile} />
                {/* <Route exact path="`/user/${slug}`" component={User} /> */}
              </> : 
              <p>Loading</p> }
            </Switch>
          </Router>
        </div>) 
  }
}
 
export default App;
