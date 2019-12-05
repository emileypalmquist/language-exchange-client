import React, {Component} from 'react';
import { Link } from "react-router-dom"

class Sidebar extends Component {

  render() {
    return (
      <div className="sidenav">
        <div className='sidenav-a'>
          <Link to='/profile'>{this.props.user.first_name}</Link>
          <Link to='/editprofile'><button>Edit Profile</button></Link>
        </div> 
        <Link to='/home'><div className='sidenav-a'>Discover</div></Link>
        <Link to='/appointments'><div className='sidenav-a'>Appointments</div></Link>
        <Link to='/'><div className='sidenav-a'>Sign Out</div></Link>
      </div>
    )
  }
}

export default Sidebar