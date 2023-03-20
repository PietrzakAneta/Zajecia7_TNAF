import React from "react";
import './Question.css';
import {QuestionOption} from '../QuestionOption/QuestionOption';


function Question({question, answer, result}){
    
    const answerHandlerClick = (isCorrect) => answer(isCorrect);

    // console.log(question);

    return(
        <div className="questionContainer">
            <div className="questionText"> {question.text} </div>
            <div className="verticalDivider"></div>
            <div className="questionAnswers">
                {question.options.map(({id, answer}) => (
                    <QuestionOption 
                    id={id}
                    answer={answer}
                    isCorrect={(id === question.correct)}
                    answerHandlerClick={answerHandlerClick}
                    result={result}
                    // option={option}
                    />
                ))}  
            </div>
        </div>
    )

}
export {Question};