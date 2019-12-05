import React, {Component} from 'react'

class LearnLang extends Component {

  state = {
    languages: [],
    language_id: 1,
    level: 'Beginner'
  }

  componentDidMount () {
    fetch('http://localhost:3000/languages')
    .then(resp => resp.json())
    .then(data => this.setState({languages: data}))
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      const userToken = localStorage.getItem("token")

      const {level, language_id} = this.state

      fetch('http://localhost:3000/fluencies', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json',
          'Authorization': userToken
        },
        body: JSON.stringify({ 
          level: level,
          language_id: language_id
        })
      })
        .then(resp=> resp.json())
        .then(data => console.log(data) );
        this.props.history.push('/native-languages')
  }

  handleLangChange = (e) => {
    this.setState({language_id: e.target.value  })
  }

  handleLevelChange = (e) => {
    this.setState({level: e.target.value })
  }

  render() {
    return (
      <div>
       <h1>I want to learn:</h1>

      <form onSubmit={this.handleSubmit}>

       <select onChange={this.handleLangChange} value={this.state.language_id}>
         {this.state.languages.map(lang => {
           return <option key={lang.id} value={lang.id} >{lang.name}</option>
         })}
       </select>
       <select onChange={this.handleLevelChange} value={this.state.level}>
           <option value="Beginner" >Beginner</option>
           <option value="Elementary" >Elementary</option>
           <option value="Intermediate">Intermediate</option>
       </select>
          <input type="submit" value="Next"></input>

      </form>

      </div>
      
    )
  }
}

export default LearnLang 