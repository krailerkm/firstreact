import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const iniData = 0;
  const [data, setData] = useState(iniData);
  const [txt, setTxt] = useState('Hello world');

  useEffect(() => {
    console.log({data});
  });

  return (
    <div>
      <p>
        Current data : {txt}
      </p>

      <button onClick={() => setTxt('Hola me')}>Click</button>
    </div>

  );
}

export default App;
