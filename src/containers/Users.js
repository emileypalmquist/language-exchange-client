import React, {Component} from 'react';
import UserCard from '../components/UserCard'
import Filter from './Filter'

class Users extends Component {
  state = {
    filter: false,
    languages: []
  }


  handleFilterClick = () => {
    this.getLanguagesFromUsers()
    this.setState({
      filter: !this.state.filter
    })
  }

  getLanguagesFromUsers = () => {
    let allLangs = [];
    this.props.users.map( user => {
      return user.languages.forEach(lang => {
        allLangs.push(lang.name)
      })
    })
    
    let unique = allLangs.filter((lang, i, a) => a.indexOf(lang) === i)
    this.setState({
      languages: unique
    })
  }

  render() {
    
    return (
      <div>
      <div className="filter" >
          <h3 onClick={this.handleFilterClick}>Find People</h3>
          {this.state.filter && <Filter languages={this.state.languages} handleChange={this.handleFilterClick} handleLangChange={this.props.handleLangChange} clearFilter={this.props.clearFilter}/> }
          </div>
        
          
          <div className="user-cards">
          {this.props.users.map(user => <UserCard key={user.id} user={user} />)}
          </div>
        
      </div>
    )
  }
}

export default Users