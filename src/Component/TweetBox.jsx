import React from 'react'
import './TweetBox.css';
import {Avatar,Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/62008327?s=460&u=8943b6a5c774923adf0e5307f97d1309c95dc10f&v=4" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
