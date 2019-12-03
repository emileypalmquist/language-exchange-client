import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Users from './Users'

class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Users />
      </div>
    )
  }
}

export default Home
