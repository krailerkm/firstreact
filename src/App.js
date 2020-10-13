import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  const fullname = "Krailerk M.";
  const num1 = 111;
  const num2 = 222;
  return (
    <div>
      <div class="MenuBarTextAlign">
        <a target="_blank" rel="noopener" class="alert alert-danger" href="#">First Page</a>
        <a target="_blank" rel="noopener" class="alert alert-info" href="#">Store</a>
        <a target="_blank" rel="noopener" class="alert alert-success" href="#">Contract</a>
      </div>
      <Header title = {fullname} />
      <Header title = "Hello world"/>
      <p>Sum : {num1 / num2}</p>
        <div className="App">
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
          <div class="alert alert-primary">Bootstrap in React!!</div>
          <div class="alert alert-secondary">Bootstrap in React!!</div>
          <div class="alert alert-dark">Bootstrap in React!!</div>
          <div class="alert alert-light">Bootstrap in React!!</div>
          <div class="alert alert-info">Bootstrap in React!!</div>
          <div class="alert alert-success">Bootstrap in React!!</div>
          <div class="alert alert-warning">Bootstrap in React!!</div>
          <div class="alert alert-danger">Bootstrap in React!!</div>
      </div>
    </div>

  );
}

export default App;
