import React, { Fragment, useEffect, useState, useContext } from 'react'

import QuizContext from '../context/quiz'
import useGeneratedGif from '../hooks/useGeneratedGif'

const Finish = () => {
  const { answers, reset } = useContext(QuizContext)
  const gif = useGeneratedGif(answers)

  return (
    <Fragment>
      <h1 className="copy">Thank you for your time.</h1>
      <p className="copy">This GIF reprisents you (based on your answers):</p>
      {gif &&
        <img src={gif.images.downsized_large.url} className="final-gif" />
      }
      <button onClick={reset} className="button">Restart</button>
    </Fragment>
  )
}

export default Finish