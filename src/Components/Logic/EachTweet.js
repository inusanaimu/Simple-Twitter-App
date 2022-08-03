import classes from './EachTweet.module.css'

const EachTweet = (props) => {
  const { tweet, deleteTweet, likeAction } = props

  const handleClick = () => {
    console.log(tweet)
    deleteTweet(tweet)
  }
  const handleLike = () => {
    likeAction(tweet)
  }
  return (
    <aside>
      <div className={classes.eachTweet}>
        <p> {tweet.message} </p>
        <button
          onClick={handleLike}
          style={{
            backgroundColor: tweet.like && '#00acee',
            border: '1px solid #708090',
            borderRadius: '3px',
          }}
        >
          {' '}
          {tweet.like ? 'Disliked' : 'Like'}{' '}
        </button>
        <button onClick={handleClick}>Delete</button>
      </div>
    </aside>
  )
}

export default EachTweet
