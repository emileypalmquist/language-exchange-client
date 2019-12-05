import React from 'react';
import Home from './containers/Home'
import Welcome from './containers/Welcome'
import Signup from './containers/SignUp';
import Profile from './components/Profile'
import Appointments from './components/Appointments'
import EditProfile from './components/EditProfile'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null,
      users: [],
      fluencies: [],
      language: '',
      filterUsers: false
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

  render() {
    const {user,users} = this.state

    return (
      
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route  path="/signup" component={Signup} />
            <Route  path="/home" render={()=> (<Home users={this.checkUserFilter()} handleLangChange={this.handleLangChange} clearFilter={this.clearFilter}/>)} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/editprofile" component={EditProfile} />
            </Switch>
        </Router>
      </div>

    );
  }
}
 
export default App;
