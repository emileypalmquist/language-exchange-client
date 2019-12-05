import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Users from './Users'

class Home extends Component {

  render() {
    return (
      <div>
        <Sidebar />
        <Users users={this.props.users} handleLangChange={this.props.handleLangChange} clearFilter={this.props.clearFilter}/>
      </div>
    )
  }
}

export default Home
