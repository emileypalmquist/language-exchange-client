import React, {Component} from 'react'

class NativeLang extends Component {

  state = {
    languages: this.props.languages,
    language_id: 1,
    level: 'Advanced'
  }

  // componentDidMount () {
  //   fetch('http://localhost:3000/languages')
  //   .then(resp => resp.json())
  //   .then(data => this.setState({languages: data}))
  // }

  handleSubmit = (e) => {
      e.preventDefault()
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

        this.props.history.push('/availability')

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
       <h1>I know:</h1>

      <form onSubmit={this.handleSubmit}>

       <select onChange={this.handleLangChange} value={this.state.language_id}>
         {this.state.languages.map(lang => {
           return <option key={lang.id} value={lang.id} >{lang.name}</option>
         })}
       </select>
       <select onChange={this.handleLevelChange} value={this.state.level}>
           <option value="Advanced" >Advanced</option>
           <option value="Expert" >Expert</option>
       </select>
          <input type="submit" value="Next"></input>

      </form>

      </div>
      
    )
  }
}

export default NativeLang