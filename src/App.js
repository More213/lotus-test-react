import {  useState } from "react";
import logo from './logo.svg';
import { useId } from 'react';
import options from "./consts/optionsTime";

import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleString("ru", options));

  const getStepOfTime = () => {
    
  }

  setTimeout(() => {
    setTime(new Date().toLocaleString("ru", options));
  }, 1000);
  return <h1 >Current Date: {time}</h1>;
}


export default App;
