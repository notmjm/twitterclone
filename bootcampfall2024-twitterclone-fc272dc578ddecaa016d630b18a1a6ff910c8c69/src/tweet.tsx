// Tweet.js
import React, { useState } from "react";

/* 
Create a new component called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

function Tweet({username, content, likes, timestamp}) {
  const [likeCounter, setLikes] = useState(likes);
  const [liked, setLiked] = useState(false);

  return (
    <div className="tweet" onClick={()=>setLiked(!liked)}>
      <h4>@{username}</h4>
      <p>{content}</p>
      <p>{timestamp} ago</p>
      {liked? <button onClick={()=>setLikes(likeCounter - 1)}> ❤️ {likeCounter} Likes</button> : <button onClick={()=>setLikes(likeCounter + 1)}> 🤍 {likeCounter} Likes</button>}
    </div>
  );
}

export default Tweet;
