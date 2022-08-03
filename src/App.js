import React, { useState } from 'react'
import TweetForm from './Components/Logic/TweetForm'
import TweetList from './Components/Logic/TweetList'
import Card from './Components/UI/Card'

import './styles.css'

function App() {
  const [tweets, setTweets] = useState([])

  const addTweet = (tweet) => {
    setTweets([
      { message: tweet, id: new Date().getTime().toString(), like: false },
      ...tweets,
    ])
  }

  const deleteTweet = (item) => {
    setTweets((tweets) => {
      return tweets.filter((tweet) => tweet.id !== item.id)
    })
  }
  const likeAction = (item) => {
    setTweets(() => {
      return tweets.map((tweet, index) => {
        if (tweet.id === item.id) {
          return { ...tweet, like: !tweet.like }
        }
        return tweet
      })
    })
  }

  return (
    <div className='App'>
      <Card>
        <h1>Twitter App</h1>
        <TweetForm addTweet={addTweet} />
        <TweetList
          tweets={tweets}
          deleteTweet={deleteTweet}
          likeAction={likeAction}
        />
      </Card>
    </div>
  )
}

export default App
