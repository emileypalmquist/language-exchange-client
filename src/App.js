import React from 'react';
import Home from './containers/Home'
import Welcome from './containers/Welcome'
import './App.css';

class App extends React.Component {
  state = {
    user: ''
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? <Home /> : <Welcome />}
      </div>
    );
  }
}

export default App;
