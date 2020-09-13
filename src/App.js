import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayData from './displayData'
import { Router } from '@reach/router';

function App() {


  return (
    <div className="App">
      <DisplayData />
    </div>
  );
}

export default App;
