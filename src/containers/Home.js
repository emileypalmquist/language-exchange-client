import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Users from './Users'

class Home extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.reAuth()
    }
  }

  render() {
    return (
      <div>
        <Sidebar user={this.props.user} handleSignOut={this.props.handleSignOut}/>
        <Users users={this.props.users} handleLangChange={this.props.handleLangChange} clearFilter={this.props.clearFilter} updateUser={this.props.updateUser}/>
      </div>
    )
  }
}

export default Home
