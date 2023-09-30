import React from 'react';
import { useState } from 'react';
import './App.css';

const App = ()=>{

  const [count, setCount] = useState(0)  
  const [index, setIndex] = useState(10);
  const [classTitle, setClassName] = useState('flashCard')
  const [type, setType] = useState("")

  const Questions = ["What is the normal rate of heart beat per day?","What is the approximate number of working parts in the eye?",
    "Mitosis is the process a single cell uses to divide into two new identical cells. What do we call each set of cells?","What kind of animal is an Orca?",
    "For every action, there is an equal and opposite reaction”, whose law is this?","What Greek letter is used to represent density (mass per unit volume)",
    "What metal is found at the center of the Earth?","What mathematical scale is employed in measuring the severity of earthquakes?",
    "Who was the first person to walk on the moon?","What phenomena keeps the planets in orbit around the sun?",
    'start'
  ]
  const Answers = ['115,000','2 million','Parent cells and daughter cells','A whale','Newton',
  'A lowercase rho (ρ)','Iron','Richter Scale','Neil Armstrong','Gravity','click next']

  const updateCount = ()=>{
    setCount(count + 1)
    setClassName(count % 2 == 1 ? 'flashCard' : 'flashCard flipped')
  };
  const updateCard = ()=>{
    setIndex(Math.floor(Math.random() * 10));
    setCount(0)
    setClassName('flashCard')
    if ('0123'.includes(index)){
      setType('biology')
    }else if ('45'.includes(index)){
      setType('physics')
    }else if('678910'.includes(index)){
      setType('geography')
    }
    console.log(index)
    console.log(count)
  }
  /* const updateType = ()=>{
    
  } */
  
  return(
    <div className='App'>
      <h2>Science and Geography</h2>
      <h4>How well vested are you in Science and Geography? Well let's find out</h4>
      <h5>Number of cards: 10</h5>

      <div id={type} className={classTitle} onClick={updateCount}>
        <div className='front'> {index == 10 ? "" : "Question:" }<br /> {Questions[index]}</div>
        <div className='back'>
          <h3> {index == 10 ? "" : "Answer:" }<br /> {Answers[index]} </h3>
        </div>
      </div>
      <button type='next' onClick={updateCard} className='nextCard'>next</button>
    </div>
  )
};

export default App;