import React,{useState} from 'react'
import './TweetBox.css';
import {Avatar,Button} from '@material-ui/core'
import db from "../firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Madhurendra Kumar",
          username: "Madhu",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://avatars.githubusercontent.com/u/62008327?s=460&u=8943b6a5c774923adf0e5307f97d1309c95dc10f&v=4",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/62008327?s=460&u=8943b6a5c774923adf0e5307f97d1309c95dc10f&v=4" />
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
                </div>
                <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
