import React, {Component} from 'react'
import Sidebar from '../containers/Sidebar'
import Fluency from './Fluency'


class Profile extends Component {
  render() {
    const {user, handleSignOut} = this.props
    return (
      <div>
        <Sidebar user={user} handleSignOut={handleSignOut}/>
        <div>
          <h6>{user.first_name + ' ' + user.last_name.split('')[0] + '.'}</h6>
          <h6>{user.fluencies.map(fluency => 
          <Fluency key={fluency.id} fluency={fluency}/>)}</h6>
        </div>
      </div>
    )
  }
}

export default Profile