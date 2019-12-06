import React, {Component} from 'react'
import Sidebar from '../containers/Sidebar'
import Appt from './Appt'

class Appointments extends Component {
  state = {
    appointments: this.props.user.student_appointment
  }


  componentDidMount() {
    if (this.state.appointments.length > 0) {
      this.setState({ appointments: this.state.appointments.concat(this.props.user.teacher_appointment)})
    } else {
      this.setState({
        appointments: this.props.user.teacher_appointment
      })
    }
  }

  render() {
  
    return (
      <div>
        <Sidebar user={this.props.user} handleSignOut={this.props.handleSignOut}/>
        { this.props.user.student_appointment.length === 0 && this.props.user.teacher_appointment.length === 0 ? <h6>You have no appointments</h6> : <Appt user={this.props.user} appointments={this.state.appointments} users={this.props.users}/> }
      </div>
    )
  }
}

export default Appointments