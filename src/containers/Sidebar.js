import React, {Component} from 'react';
import { Link } from "react-router-dom"

class Sidebar extends Component {
  handleUser = () => {
    if (this.props.user) {
      return this.props.user.first_name
    }
  }


  render() {
    return (
      <div className="sidenav">
        <div className='sidenav-a'>
          <Link to='/profile'>{this.handleUser()}</Link>
          <Link to='/editprofile'><button>Edit Profile</button></Link>
        </div> 
        <Link to='/home'><div className='sidenav-a'>Discover</div></Link>
        <Link to='/appointments'><div className='sidenav-a'>Appointments</div></Link>
        <Link to='/'><div className='sidenav-a' onClick={this.props.handleSignOut}>Sign Out</div></Link>
      </div>
    )
  }
}

export default Sidebar