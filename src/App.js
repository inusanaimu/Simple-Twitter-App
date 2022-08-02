import React, { useState } from 'react'
import TweetForm from './Components/TweetForm'
import TweetList from './Components/TweetList'

import './styles.css'

function App() {
  const [tweets, setTweets] = useState([
    { id: 1, message: 'First', like: false },
    { id: 2, message: 'Second', like: true },
  ])

  const addTweet = (tweet) => {
    setTweets([
      ...tweets,
      { message: tweet, id: new Date().getTime().toString(), like: false },
    ])
  }

  const deleteTweet = (item) => {
    setTweets((tweets) => {
      return tweets.filter((tweet) => tweet.id !== item.id)
    })
  }
  const likeAction = (item) => {
    setTweets(() => {
      return tweets.map((tweet) => {
        if (tweet.id === item.id) {
          return { ...tweet, like: !tweet.like }
        }
        return tweet
      })
    })
  }

  return (
    <div className='App'>
      <h1>Twitter App</h1>
      <TweetForm addTweet={addTweet} />
      <TweetList
        tweets={tweets}
        deleteTweet={deleteTweet}
        likeAction={likeAction}
      />
    </div>
  )
}

export default App
