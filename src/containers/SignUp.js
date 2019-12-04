import React, {Component} from 'react'
import NativeLang from '../components/NativeLang';

class Signup extends Component {

  constructor() {
    super()

    
  }


  render() {
    return (
      <div>
          <form>
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" ></input>

            <label htmlFor="last-name">Last Name</label>
            <input id="last-name"></input>

            <label htmlFor="username">Username</label>
            <input id="username" ></input>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" ></input>

            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>

            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password"></input>
            
            <input type="submit" value="Next"></input>

          </form>


       
      </div>
    )
  }
}
 
export default Signup