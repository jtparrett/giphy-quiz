import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const Finish = ({ selectedOptions }) => {
  const [gif, setGif] = useState(false)

  useEffect(() => {
    axios('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'rqs9pJV9Tf8TZZfl67msDJtYo4SvGEOi',
        q: selectedOptions.join(','),
        limit: 1,
        offset: Math.ceil(Math.random() * 100)
      }
    }).then(({ data }) => {
      const [myGif] = data.data
      setGif(myGif)
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

export default Finish