import React, {Component, useState} from "react";

const GuessForm = (props) => {
    const [guess, setGuess] = useState('') 
    const [status, setStatus] = useState("")
    const [currentStreak, setCurrentStreak] = useState(0)
    const [longestStreak, setLongestStreak] = useState(0)

    const handleGuess = (e)=>{
        setGuess(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(guess);
        if (guess == props.answer){
            setCurrentStreak(currentStreak + 1)
            setStatus('correct')
        }else{
            setStatus('wrong')
            setCurrentStreak(0)
            setLongestStreak(Math.max(currentStreak, longestStreak))
        }
    }
  return (
    <div>
        <h3>Status:{status}</h3> 
        <h4>Current Streak:{currentStreak}, Longest Streak:{longestStreak}</h4>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="guess">Guess the answer here: </label>
            <input type="text" name="guess" value={guess} onChange={handleGuess}/>
            <input type="submit" name="submit" value={'submit guess'}/>
        </form>
    </div>
  );
  
};

export default GuessForm;
