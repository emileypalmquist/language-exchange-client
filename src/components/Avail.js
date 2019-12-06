import React, {Component} from 'react'

class Avail extends Component {
  state = {
    language_id: this.props.lang[0].id,
    date: ''
  }

  createAppointment = (e) => {
    e.preventDefault()
    const userToken = localStorage.getItem("token")

    const {date, language_id} = this.state

    fetch('http://localhost:3000/appointments', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        'Authorization': userToken
      },
      body: JSON.stringify({ 
        date: date,
        language_id: language_id,
        teacher_id: this.props.user.id
      })
    })
    .then(resp => resp.json())
    .then(appt => this.props.updateUser(appt))
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLangChange = (e) => {
    this.setState({
      language_id: e.target.value
    })
  }

  render() {
    return (
      <div>
        Choose a meet up date and language:<br />
       <input type="date" onChange={this.handleChange} name="date"></input>
       <select onChange={this.handleLangChange} value={this.state.language_id}>
         {this.props.lang.map(lang => {
           return <option key={lang.id} value={lang.id} >{lang.name}</option>
         })}
       </select>
       <button onClick={this.createAppointment}>Create Meeting</button>
      </div>
    )
  }
}

export default Avail