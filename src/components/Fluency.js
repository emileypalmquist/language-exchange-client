import React, {Component} from 'react'

class Fluency extends Component {
  fluencyBubbles = () => {
    
  }

  render() {
    return (
      <div className='container'>
      {this.props.fluency.language.name + ' ' +
      this.props.fluency.level}
      </div>
    )
  }
}

export default Fluency