import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  // add useEffect code
    useEffect(() => {
      
      const resetTimer = () => {
        setTimeRemaining(10);
        onAnswered(false);
      };

    let timeOut = timeRemaining > 0 ? timeRemaining-1 : resetTimer()
    let timer = setTimeout(() => {
                setTimeRemaining(timeOut)
         }, 1000) 
    
         return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
    }, [timeRemaining, onAnswered])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
