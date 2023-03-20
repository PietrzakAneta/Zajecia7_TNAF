import React from "react";
import './NextQuestionButton.css';

function NextQuestionButton({ onClick}){

return(
    <div className="quizButtonRow">
        <button onClick={onClick} className="quizNextQuestionButton">Dalej</button>
        
    </div>
)

}
export {NextQuestionButton};