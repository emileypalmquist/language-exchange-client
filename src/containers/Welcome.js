import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Welcome extends Component {

  state = {
    error: false,
    user: {
      password: '',
      username: ''
    }
  } 

  handleLogin = (e) => {
    e.preventDefault()
    const {user, error} = this.state
    fetch('http://localhost:3000/login',{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          password: user.password, 
          username: user.username
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({ error: !error });
      } else {
        this.props.handleUserLogin(data);
        this.props.history.push('/home');
      }
    })
  }

  handleChange = (e) => {
    const {id, value} = e.target
    this.setState({
      user : {...this.state.user, [id]: value}
    })
  }

  render() {
    const {username, password} = this.state.user
    return (
      <div>
        {this.state.error && <h1>Try Again</h1>}
        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input id="username" onChange={this.handleChange} value={username}></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={this.handleChange} value={password}></input>
          <input type="submit" value="Login"></input>
        </form>
          <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    )
  }
}

export default Welcome