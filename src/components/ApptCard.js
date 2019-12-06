import React, {Component} from 'react'

class ApptCard extends Component {
  findUser = () => {
    let idLookingFor
    if (this.props.currentUser.id !== this.props.appt.teacher_id ) {
      idLookingFor = this.props.appt.teacher_id
    } else {
      idLookingFor = this.props.appt.student_id
    }
    return idLookingFor
  }
  
  getUser = () => {
    
    return this.props.users.find(user => user.id === this.findUser() )
  }

  render() {
    
   const date = new Date(this.props.appt.date)
    return (
      <div className="card">
        {this.props.users.length > 0 && this.getUser().first_name}
        {(date.getMonth() + 1) + "/" +
        date.getDate() + "/" +
        date.getFullYear()+ "  " }
        
      </div>
    )
  }
 
}

export default ApptCard