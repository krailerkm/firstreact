import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  const iniData = 0;
  const [data, setData] = useState(iniData);

  return (
    <div>
      <p>
        Current data : {data}
      </p>

      <button onClick={() => setData(data+1)}>+</button>
      <button onClick={() => setData(data-1)}>-</button>
      <button onClick={() => setData(iniData)}>CC</button>
    </div>

  );
}

export default App;
