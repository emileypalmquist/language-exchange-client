import React, {Component} from 'react'
import Fluency from './Fluency'
import User from './User'
import { Link } from "react-router-dom"

class UserCard extends Component {

  render() {
    const {user} = this.props
    return (
      <div className="card" onClick={this.handleUserCardClick}>
        <h6>{user.first_name + ' ' + user.last_name}</h6>
        <h6>{this.props.user.fluencies.map(fluency => 
        <Fluency key={fluency.id} fluency={fluency}/>)}</h6>
      </div>  
    )
  }
}

export default UserCard