import React, {Component} from 'react'
import Sidebar from '../containers/Sidebar'
import { thisExpression } from '@babel/types'

class Appointments extends Component {
  render() {
    return (
      <div>
        <Sidebar user={this.props.user} handleSignOut={this.props.handleSignOut}/>
        { this.props.user.student_appointment.length === 0 && this.props.user.teacher_appointment.length === 0? <h6>You have no appointments</h6> : <h6>Here will be all you appointments</h6> }
      </div>
    )
  }
}

export default Appointments