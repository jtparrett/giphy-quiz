import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import './index.css'
import useQuiz from './hooks/useQuiz'
import questions from './data/questions'
import Logo from './assets/logo.svg'

const Finish = ({ selectedOptions }) => {
  const [gif, setGif] = useState(false)

  useEffect(() => {
    axios('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'rqs9pJV9Tf8TZZfl67msDJtYo4SvGEOi',
        q: encodeURIComponent(selectedOptions.join('&'))
      }
    }).then(({ data }) => {
      const index = Math.ceil(Math.random() * (data.data.length - 1))
      setGif(data.data[index])
    })
  }, [])

  return (
    <Fragment>
      <h1 className="title">Thank you for your time.</h1>
      <p className="title">This GIF reprisents you (based on your answers):</p>
      {gif &&
        <img src={gif.images.fixed_width.url} className="my-gif" />
      }
    </Fragment>
  )
}

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
          <li className="option" onClick={() => goToNextQuestion(option)} key={index}>{option}</li>
        ))}
      </ul>
    </Fragment>
  )
}

const App = () => (
  <div className="wrapper">
    <a href="/">
      <img src={Logo} className="logo" />
    </a>
    <Quiz />
  </div>
)

export default App