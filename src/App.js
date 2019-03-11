import React from 'react'

import './index.css'
import Logo from './assets/logo.svg'
import Quiz from './Components/Quiz'
import Finish from './Components/Finish'

import { QuizProvider, QuizConsumer } from './context/quiz'

const App = () => (
  <QuizProvider>
    <div className="wrapper">
      <a href="/">
        <img src={Logo} className="logo" />
      </a>
      <QuizConsumer>
        {({ complete }) => {
          if (complete) {
            return <Finish />
          }

          return <Quiz />
        }}
      </QuizConsumer>
    </div>
  </QuizProvider>
)

export default App