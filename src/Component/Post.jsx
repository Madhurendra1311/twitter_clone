import React from 'react'
import "./Post.css";
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Madhurendra {" "}
                            <span><VerifiedUserIcon className="post__badge" /></span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone</p>
                    </div>
                </div>
                <img src="https://avatars.githubusercontent.com/u/62008327?s=460&u=8943b6a5c774923adf0e5307f97d1309c95dc10f&v=4" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post