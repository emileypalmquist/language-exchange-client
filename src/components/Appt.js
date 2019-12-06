import React, {Component} from 'react'
import ApptCard from './ApptCard'

class Appt extends Component {
  render() {
    return (
      <div>

        <div><h3>UPCOMING:</h3></div>
        {this.props.appointments.map(appt => <ApptCard key={appt.id} appt={appt} users={this.props.users} currentUser={this.props.user}/>)}
      </div>
    )
  }
}

export default Appt