import React, {Component} from 'react'

class Availability extends Component {

  state = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    start_time: "",
    end_time: ''
  }

  handleClick = (e) => {
    const {name, checked} = e.target
    this.setState({ [name]: checked }) 
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const userToken = localStorage.getItem("token")

    const {monday, tuesday, wednesday, thursday, friday, saturday , sunday, start_time, end_time} = this.state

    fetch('http://localhost:3000/availabilities', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json',
          'Authorization': userToken
        },
        body: JSON.stringify({ 
          monday, tuesday, wednesday, thursday, friday, saturday , sunday, start_time, end_time
        })
      })
      this.props.history.push('/home')
   }


  render() {

    const {monday, tuesday, wednesday, thursday, friday, saturday , sunday, start_time, end_time} = this.state
    return (
      
      <div>
       <h1>Which days of the week would you like to learn? </h1>

      <form onSubmit={this.handleSubmit}>
        
        <input type="checkbox" id="choice1"
        name="monday" value={monday} onClick={this.handleClick} />
        <label htmlFor="choice1">Monday</label>

        <input type="checkbox" id="choice2"
        name="tuesday" value={tuesday} onClick={this.handleClick}/>
        <label htmlFor="choice2">Tuesday</label>

        <input type="checkbox" id="choice3"
        name="wednesday" value={wednesday} onClick={this.handleClick}/>
        <label htmlFor="choice3">Wednesday</label>


        <input type="checkbox" id="choice4"
        name="thursday" value={thursday} onClick={this.handleClick}/>
        <label htmlFor="choice4">Thursday</label>

        <input type="checkbox" id="choice5"
        name="friday" value={friday} onClick={this.handleClick}/>
        <label htmlFor="choice5">Friday</label>

        <input type="checkbox" id="choice6"
        name="saturday" value={saturday} onClick={this.handleClick}/>
        <label htmlFor="choice6">Saturday</label>

        <input type="checkbox" id="choice7"
        name="sunday" value={sunday} onClick={this.handleClick}/>
        <label htmlFor="choice7">Sunday</label>

        <label htmlFor="choice8">From</label>
        <input type="time" id="choice8"
        name="start_time" value={start_time} onChange={this.handleChange}/>
        
        <label htmlFor="choice9">From</label>
        <input type="time" id="choice9"
        name="end_time" value={end_time} onChange={this.handleChange}/>

        <input type="submit" value='Finish'/>

      </form>

      </div>
    )
  }
}

export default Availability