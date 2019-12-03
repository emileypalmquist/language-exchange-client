import React, {Component} from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <form>
          <label for="username">Username</label>
          <input id="username"></input>
          <label for="password">Password</label>
          <input id="password"></input>
          <input type="submit" value="Login"></input>
        </form>
       <button>Sign Up</button>
      </div>
    )
  }
}

export default Welcome