import React from 'react'

function QuizResult({correctAnswers, questionsNumber}){

    return(
        <div>
            Wynik: {correctAnswers} / {questionsNumber}
        </div>
    )
}

export { QuizResult };