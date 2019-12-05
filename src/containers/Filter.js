import React, {Component} from 'react'

class Filter extends Component {

  render() {
    return (
      <div className="filter" >
        <h6>I want to learn</h6>
        <select onChange={this.props.handleLangChange}>{this.props.languages.map(lang => <option>{lang}</option>)}
        </select>
        <button onClick={this.props.clearFilter}>Clear Filter</button> 
      </div>
    )
  }
}

export default Filter