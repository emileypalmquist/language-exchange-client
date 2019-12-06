import React, {Component} from 'react'


class Signup extends Component {

  constructor() {
    super()


    this.state = {
          firstName: "",
          lastName: "",
          birthday: '',
          password: '',
          username: ''
    }
    
  }


  handleFirstNext = (e) => {
    e.preventDefault()
    const {firstName, lastName, birthday, password, username} = this.state
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: firstName,
          last_name: lastName,
          birthday: birthday,
          password: password,
          username: username
        }
      })
    })
    .then(resp => resp.json())
    .then(user => localStorage.setItem("token", user.jwt));
    this.props.history.push('/learn-languages')
  } 

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value})
    }



  render() {
    const {firstName, lastName, password, username} = this.state
    return (
      <div>
          <form onSubmit={this.handleFirstNext}>
            <label htmlFor="first-name" >First Name</label>
            <input id="first-name" value={firstName} name="firstName" onChange={this.handleChange}></input>

            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" value={lastName} name="lastName" onChange={this.handleChange} ></input>

            <label htmlFor="username">Username</label>
            <input id="username" value={username} name="username" onChange={this.handleChange}></input>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" name="birthday" onChange={this.handleChange}></input>

            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} name="password" onChange={this.handleChange}></input>
            
            <input type="submit" value="Next"></input>

          </form>
      </div>
    )
  }





}

 
export default Signup