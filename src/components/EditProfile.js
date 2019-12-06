import React, {Component} from 'react'
import Sidebar from '../containers/Sidebar'
import Fluency from './Fluency'

class EditProfile extends Component {

    state = {
      languages: this.props.languages,
  
      langLearn_id: this.props.user.languages[0].id , 
      langKnow_id: this.props.user.languages[1].id,
  
      levelLearnLang: this.props.user.fluencies[0].level,
      levelKnowLang: this.props.user.fluencies[1].level
    }

  //updating learn languages
  handleLearnSubmit = (e) => {
    e.preventDefault()
    const userToken = localStorage.getItem("token")

    const {levelLearnLang, langLearn_id} = this.state
    const {fluencies} = this.props.user

    fetch(`http://localhost:3000/fluencies/${fluencies[0].id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        'Authorization': userToken
      },
      body: JSON.stringify({ 
        level: levelLearnLang,
        language_id: langLearn_id
      })
    })
    .then(resp => resp.json())
    .then(data => this.props.reAuth())
  }

  handleLearnLangChange = (e) => {
    this.setState({langLearn_id: e.target.value  })
  }

  handleLearnLevelChange = (e) => {
    this.setState({levelLearnLang: e.target.value })
  }

  // updating know languages
  handleKnowSubmit = (e) => {
    e.preventDefault()

    const userToken = localStorage.getItem("token")

    const {levelKnowLang, langKnow_id} = this.state
    const {fluencies} = this.props.user

    fetch(`http://localhost:3000/fluencies/${fluencies[1].id}`, { 
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        'Authorization': userToken
      },
      body: JSON.stringify({ 
        level: levelKnowLang,
        language_id: langKnow_id
      })
    })
    .then(res => res.json())
    .then(() => this.props.reAuth())
  }

  handleKnowLangChange = (e) => {
    this.setState({langKnow_id: e.target.value  })
  }

  handleKnowLevelChange = (e) => {
    this.setState({levelKnowLang: e.target.value })
  }

  render() {
    
    const {user, handleSignOut, handleDelete} = this.props
    // const {monday, tuesday, wednesday, thursday, friday, saturday , sunday, start_time, end_time} = user.availabilities[0]

    return (
      <div>
        <Sidebar user={user} handleSignOut={handleSignOut}/>
        
        <h1>I want to learn:</h1>
        <form onSubmit={this.handleLearnSubmit}>

       <select onChange={this.handleLearnLangChange} value={this.state.langLearn_id}>
         {this.state.languages.map(lang => {
           return <option key={lang.id} value={lang.id} >{lang.name}</option>
         })}
       </select>
       <select onChange={this.handleLearnLevelChange} value={this.state.levelLearnLang}>
           <option value="Beginner" >Beginner</option>
           <option value="Elementary" >Elementary</option>
           <option value="Intermediate">Intermediate</option>
       </select>
          <input type="submit" value="Edit"></input>

      </form>
      
      <h1>I know:</h1>
        <form onSubmit={this.handleLearnSubmit}>

       <select onChange={this.handleKnowLangChange} value={this.state.langKnow_id}>
         {this.state.languages.map(lang => {
           return <option key={lang.id} value={lang.id} >{lang.name}</option>
         })}
       </select> 
       <select onChange={this.handleKnowLevelChange} value={this.state.levelKnowLang}>
          <option value="Advanced" >Advanced</option>
           <option value="Expert" >Expert</option>
       </select>
          <input type="submit" value="Edit"></input>

      </form>
         <br/>
      <button onClick={handleDelete}>Delete Account</button>

      {/* <h1>Which days of the week would you like to learn? </h1> */}

      {/* <form onSubmit={this.handleSubmit}>
        
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

        <input type="submit" value='Edit'/>

      </form> */}



      </div>
    )
  }
}

export default EditProfile