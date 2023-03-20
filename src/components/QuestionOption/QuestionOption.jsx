import React from "react";
import './QuestionOption.css';

function QuestionOption({answer, answerHandlerClick, isCorrect}){

    const handlerClick = () => answerHandlerClick(isCorrect);
    
    return(
        <button onClick={handlerClick} className="questionOptionButton"> {answer} </button>

    )
}

export { QuestionOption };