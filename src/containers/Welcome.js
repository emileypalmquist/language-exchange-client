import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Welcome extends Component {

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" ></input>
          <label htmlFor="password">Password</label>
          <input id="password"></input>
          <Link to="/home"><input type="submit" value="Login"></input></Link>
        </form>
          <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    )
  }
}

export default Welcome