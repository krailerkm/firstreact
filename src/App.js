import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header title = "Test Dev" />

      <h1 className="hello-react"><i>Hello World!!</i></h1>
      <table border="1">
        <tr>
          <td>Number</td>
          <td>Description</td>
          <td>999</td>
        </tr>
        <tr>
          <td>001</td>
          <td>My name is Hello!</td>
          <td>888</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Hi!</td>
          <td>777</td>
        </tr>
      </table>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
