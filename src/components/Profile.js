import React, {Component} from 'react'
import Sidebar from '../containers/Sidebar'
import Fluency from './Fluency'


class Profile extends Component {



  render() {

    const {user, handleSignOut} = this.props
    
    const {monday, tuesday, wednesday, thursday, friday, saturday , sunday, start_time, end_time} = user.availabilities[0]

    const availDays = {Monday: monday, Tuesday: tuesday, Wednesday: wednesday, Thursday: thursday, Friday: friday, Saturday: saturday , Sunday: sunday}

    const startTime = new Date(start_time)
    const endTime = new Date(end_time)
    
    return (
      <div>
        <Sidebar user={user} handleSignOut={handleSignOut}/>
        <div>
          <h6>{user.first_name + ' ' + user.last_name.split('')[0] + '.'}</h6>
          <h6>{user.fluencies.map(fluency => 
          <Fluency key={fluency.id} fluency={fluency}/>)}</h6>
        </div>
        <div>
          { 
            Object.keys(availDays).map(day => (
              availDays[day] && <div key={day}>{day}</div>
          ))
          }
          {`${startTime.getHours()}:${startTime.getMinutes() === 0 ? "00" : startTime.getMinutes()}` }
          <br/>
          {`${endTime.getHours()}:${endTime.getMinutes() === 0 ? "00" : endTime.getMinutes()}` }
        </div>
      </div>
    )
  }
}

export default Profile