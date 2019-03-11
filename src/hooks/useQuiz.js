import React, { useState } from 'react'

const useQuiz = (questions) => {
  const [index, setIndex] = useState(0)
  const [complete, setComplete] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const goToNextQuestion = (option) => {
    setSelectedOptions([
      ...selectedOptions,
      option
    ])

    if (index < questions.length - 1) {
      return setIndex(index + 1)
    }

    setComplete(true)
  }

  return {
    goToNextQuestion,
    complete,
    selectedOptions,
    question: questions[index]
  }
}

export default useQuiz