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
          <li
            className="answers__item"
            onClick={() => selectAnswer(answer)}
            key={index}
          >
            {answer}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Quiz