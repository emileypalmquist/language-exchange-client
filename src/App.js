import React from 'react';
import Home from './containers/Home'
import Welcome from './containers/Welcome'
import Signup from './containers/SignUp';
import Profile from './components/Profile'
import Appointments from './components/Appointments'
import EditProfile from './components/EditProfile'
import NativeLang from './components/NativeLang';
import LearnLang from './components/LearnLang';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      users: [],
      fluencies: [],
      language: '',
      filterUsers: false,
      auth: { currentUser: {} }
    }
    this.allUser = []
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => {
        this.allUser = users
        this.setState({
        users: users
      })
    }
    )
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
      const newArray = user.languages.map(lang => lang.name)
      if (newArray.includes(language)){
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
    const currentUser = { currentUser: user.user };
    localStorage.setItem('token', user.jwt);

    this.setState({ auth: currentUser });
  }


  render() {
    const {auth} = this.state
    // console.log(auth.currentUser)
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route  path="/home" render={(props)=> (<Home users={this.checkUserFilter()} user={auth.currentUser} handleLangChange={this.handleLangChange} clearFilter={this.clearFilter} {...props}/>)} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/" render={(props) => <Welcome {...props} handleUserLogin={this.handleUserLogin}/>} />
            <Route exact path="/signup" render={(props) => <Signup {...props}/>}/>
            <Route exact path="/native-languages" render={(props) => <NativeLang {...props}/>} />
            <Route exact path="/learn-languages" render={(props) => <LearnLang {...props}/>}  />
            </Switch>
        </Router>
      </div>

    );
  }
}
 
export default App;
