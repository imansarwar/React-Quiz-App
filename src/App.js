import React from 'react';
import './App.css';
import Questionnaire from './components/Questionnaire';
import head from './image/head.png';

function App() {
  return (
    <div className="App">
      <div className="image">
       <img src={head}/>
       </div>
      <h1>Javascript Quiz</h1>
      <Questionnaire/>
     
    </div>
  );
}

export default App;
