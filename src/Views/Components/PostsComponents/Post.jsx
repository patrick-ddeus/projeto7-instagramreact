import React, { useState } from "react";
import CommentArea from "./CommentArea";
import IconsArea from "./IconsArea";
import LikeButton from "./LikeButton"

function handleHeart(setLiked, liked) {
    setLiked(!liked)
    if (!liked) {
        setTimeout(() => {
            setLiked(liked)
        }, 800)
    }
}

const Post = ({ randomUser, randomPost, likes }) => {
    const [liked, setLiked] = useState(false);

    return (
        <article className="posts" >
            <header className="header-post">
                <div className="user-info flex-container">
                    <img src={randomUser.userAvatar} style={{ width: "32px" }} alt="user avatar" />
                    <p>{randomUser.user}</p>
                </div>
                <a href={window.location.href}>
                    <ion-icon name="ellipsis-horizontal-outline" style={{ width: "20px", marginRight: "18px", marginTop: "15px", color: "black" }} />
                </a>
            </header>
            <div className="post-img" onDoubleClick={() => handleHeart(setLiked, liked)}>
                <picture>
                    <img src={randomPost} alt="instagram-post" />
                    <LikeButton liked={liked} setLiked={setLiked} />
                </picture>
            </div>
            <footer>
                <IconsArea liked={liked} />
                <CommentArea randomUser={randomUser} likes={likes} />
            </footer>
        </article >
    )
}

export default Post