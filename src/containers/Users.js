import React, {Component} from 'react';
import UserCard from '../components/UserCard'
import Filter from './Filter'

class Users extends Component {
  state = {
    filter: false,
    languages: []
  }


  handleFilterClick = () => {
    this.setState({
      filter: !this.state.filter
    })
  }

  

  componentDidMount() {
    fetch('http://localhost:3000/languages')
      .then(resp => resp.json())
      .then(data => this.setState({languages: data}))
  }

  render() {
    return (
      <div>
        <div className="filter" >
          <h3 onClick={this.handleFilterClick}>Find People</h3>
          {this.state.filter && <Filter languages={this.state.languages} handleChange={this.handleFilterClick} handleLangChange={this.props.handleLangChange} clearFilter={this.props.clearFilter}/> }
          </div>
        <div className="user-cards">
        {this.props.users.map(user => <UserCard key={user.id} user={user} language={this.state.language}/>)}
        </div>
      </div>
    )
  }
}

export default Users