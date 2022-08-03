import React, { useState } from 'react'

import classes from './TweetForm.module.css'

const TweetForm = (props) => {
  const { addTweet } = props
  const [inputTweet, setInputTweet] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = inputTweet
    if (message.trim() !== '') {
      console.log(message)
      addTweet(message)
      setInputTweet('')
    }
  }
  return (
    <form className={classes.form} id='tweet' onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(e) => {
          setInputTweet(e.target.value)
        }}
        value={inputTweet}
        placeholder='Type Tweet'
        id='tweet'
      />
      <button type='submit'>Tweet</button>
    </form>
  )
}
export default TweetForm
