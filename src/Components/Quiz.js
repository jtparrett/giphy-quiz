import React, { Fragment, useContext } from 'react'

import QuizContext from '../context/quiz'

const Quiz = () => {
  const { 
    question, 
    selectAnswer 
  } = useContext(QuizContext)

  return (
    <Fragment>
      <h1 className="copy">{question.title}</h1>
      <ul className="answers">
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button className="answers__item" onClick={() => selectAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Quiz