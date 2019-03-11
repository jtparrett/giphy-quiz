import React, { Fragment } from 'react'

import useQuiz from '../hooks/useQuiz'
import questions from '../data/questions'
import Finish from './Finish'

const Quiz = () => {
  const {
    question,
    goToNextQuestion,
    complete,
    selectedOptions
  } = useQuiz(questions)

  if (complete) {
    return (
      <Finish selectedOptions={selectedOptions} />
    )
  }

  const { title, options } = question

  return (
    <Fragment>
      <h1 className="title">{title}</h1>
      <ul className="options">
        {options.map((option, index) => (
          <li 
            className="option" 
            onClick={() => goToNextQuestion(option)} 
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Quiz