import { useState } from 'react'

import questions from '../data/questions'

const useQuiz = () => {
  const [index, setIndex] = useState(0)
  const [complete, setComplete] = useState(false)
  const [answers, setAnswers] = useState([])

  const selectAnswer = (answer) => {
    setAnswers([
      ...answers,
      answer
    ])

    if (index < questions.length - 1) {
      return setIndex(index + 1)
    }

    setComplete(true)
  }

  return {
    complete,
    answers,
    question: questions[index],
    selectAnswer
  }
}

export default useQuiz