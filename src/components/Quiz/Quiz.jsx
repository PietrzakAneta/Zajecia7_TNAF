import React, { useState } from 'react';
import './Quiz.css';
// import {QuestionOption} from '../QuestionOption/QuestionOption';
import {NextQuestionButton} from '../NextQuestionButton/NextQuestionButton';
import {Question} from '../Question/Question';
import {QuizResult} from '../QuizResult/QuizResult';

function Quiz({ questions }) {

  const questionsNumber = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers,  setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
    const [result, setResult] = useState(false);


  const nextQuestion = () => {
    if(currentQuestion === questionsNumber){
      setFinished(true);
      return;
    }
    setResult(false);
    setCurrentQuestion(prev => prev + 1);
  };


  const answer = isCorrect => {
    if(isCorrect === true){
      setCorrectAnswers(prev => prev + 1);
    }
    setResult(true);
  }
  
  // console.log(questions);

  return (

    <div className="quizContainer">
      
      <header className="quizHeader"> Pytanie {currentQuestion} / {questionsNumber} </header>

      {!finished && ( <Question question={questions[currentQuestion-1]} answer={answer} result={result}></Question>)} 
      
      {result && !finished && (<NextQuestionButton onClick={nextQuestion}/>)}

      {finished && ( <QuizResult correctAnswers={correctAnswers} questionsNumber={questionsNumber}></QuizResult> )}

    
    </div>
  )
}

export { Quiz };