import React, { Component } from 'react';
import Home from './Home';

class App extends Component {
  render(){
    const txtStyle = {
      color: 'white',
      backgroundColor: 'gray'
    };

    const fullname = "Mr. ABC"

    return (
      <div>
        <h1 style={txtStyle}>Hello world 1</h1>
        <p>{fullname}</p>
        <Home name = "My mother home" address = "Bangkok" />
      </div>
    );
  }
}

export default App;
