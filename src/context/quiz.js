import React from 'react'

import useQuiz from '../hooks/useQuiz'

const Context = React.createContext()

export const QuizProvider = ({ children }) => {
  const quiz = useQuiz()

  return (
    <Context.Provider value={quiz}>
      {children}
    </Context.Provider>
  )
}

export const QuizConsumer = Context.Consumer

export default Context