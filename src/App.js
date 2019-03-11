import React from 'react'

import './index.css'
import Logo from './assets/logo.svg'
import Quiz from './Components/Quiz'

const App = () => (
  <div className="wrapper">
    <a href="/">
      <img src={Logo} className="logo" />
    </a>
    <Quiz />
  </div>
)

export default App