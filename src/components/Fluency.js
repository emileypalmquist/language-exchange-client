import React, {Component} from 'react'

class Fluency extends Component {
  fluencyBubbles = () => {
    
  }

  render() {
    return (
      <div className='container'>
      {this.props.fluency.language.name}
      {this.props.fluency.level}
        <span className="dot" id='beginner'></span>
        <span className="dot" id='elementary'></span>
        <span className="dot" id='intermediate'></span>
        <span className="dot" id='advanced'></span>
        <span className="dot" id='expert'></span>
      </div>
    )
  }
}

export default Fluency