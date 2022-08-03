import EachTweet from './EachTweet'
import Card from './UI/Card'

function TweetList(props) {
  const { tweets, deleteTweet, likeAction } = props

  return (
    <>
      {tweets.length ? ' ' : 'No tweet yet'}
      {tweets.map((tweet) => {
        return (
          <Card>
            <EachTweet
              key={tweet.id}
              tweet={tweet}
              deleteTweet={deleteTweet}
              likeAction={likeAction}
            />
          </Card>
        )
      })}
    </>
  )
}

export default TweetList
