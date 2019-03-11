import { useState, useEffect } from 'react'
import axios from 'axios'

const useGeneratedGif = (quizAnswers) => {
  const [gif, setGif] = useState(false)

  useEffect(() => {
    axios('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'rqs9pJV9Tf8TZZfl67msDJtYo4SvGEOi',
        q: quizAnswers.join(' '),
        limit: 1,
        offset: Math.ceil(Math.random() * 100)
      }
    }).then(({ data }) => {
      const [firstItem] = data.data
      setGif(firstItem)
    })
  }, [])

  return gif
}

export default useGeneratedGif