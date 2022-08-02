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
        <button onClick={handleLike}> {tweet.like ? 'Liked' : 'Like'} </button>
        <button onClick={handleClick}>delete</button>
      </div>
    </aside>
  )
}

export default EachTweet
