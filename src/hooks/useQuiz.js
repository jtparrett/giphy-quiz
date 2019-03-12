import { useReducer } from 'react'

import questions from '../data/questions'

const initialState = {
  index: 0,
  complete: false,
  answers: []
}

const reducer = (state, action) => {
  switch(action.type){
    case 'selectAnswer': {
      const index = state.index + 1
      
      return {
        index,
        complete: index > questions.length - 1,
        answers: [
          ...state.answers,
          action.answer
        ]
      }
    }

    case 'reset': {
      return initialState
    }
  }
}

const useQuiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const selectAnswer = (answer) => {
    dispatch({ type: 'selectAnswer', answer })
  }

  const reset = () => {
    dispatch({ type: 'reset' })
  }

  return {
    ...state,
    reset,
    selectAnswer,
    question: questions[state.index]
  }
}

export default useQuiz