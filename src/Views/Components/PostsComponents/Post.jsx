import React, { useState } from "react";
import CommentArea from "./CommentArea";
import IconsArea from "./IconsArea";
import LikeButton from "./LikeButton"
import HeaderPost from "./HeaderPost"

function handleHeart(setLiked, liked, setKeepLiked, setPostLikes, postLikes, likes) {
    setLiked(!liked) // true
    setKeepLiked(true)
    if (!liked) {
        if(Number(likes) === Number(postLikes)){
            setPostLikes(Number(postLikes) + 1)
        }
        setTimeout(() => {
            setLiked(liked) // false
        }, 800)
    }
}

const Post = ({ randomUser, randomPost, likes }) => {
    const [liked, setLiked] = useState(false);
    const [keepLiked, setKeepLiked] = useState(false)
    let [postLikes, setPostLikes] = useState(likes)

    return (
        <article className="posts" >
            <HeaderPost randomuser={randomUser}/>
            <div className="post-img" onDoubleClick={() => handleHeart(setLiked, liked, setKeepLiked, setPostLikes, postLikes, likes)}>
                <picture>
                    <img className="post-image" src={randomPost} alt="instagram-post" />
                    <LikeButton liked={liked} setLiked={setLiked} />
                </picture>
            </div>
            <footer>
                <IconsArea liked={keepLiked} setKeepLiked={setKeepLiked} likes={postLikes} setPostLikes={setPostLikes}/>
                <CommentArea randomUser={randomUser} likes={Math.floor(postLikes)} />
            </footer>
        </article >
    )
}

export default Post