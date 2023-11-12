import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from 'styled-components';

const Test = styled.div` 
  width: 100px;
  height: 200px;
  background: green;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src=''>
        <button></button>
      </img>
      <h1>Playing Now</h1>
      <img className='img-music'></img>
      <Test />
    </div>
  )
};Ы

export default App;
