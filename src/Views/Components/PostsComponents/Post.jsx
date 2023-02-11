import React, { useState } from "react";
import CommentArea from "./CommentArea";
import IconsArea from "./IconsArea";
import LikeButton from "./LikeButton"
import HeaderPost from "./HeaderPost"


const Post = ({ randomUser, randomPost, likes }) => {
    const [liked, setLiked] = useState(false);
    const [keepLiked, setKeepLiked] = useState(false)
    const [postLikes, setPostLikes] = useState(likes)


    function handleHeart() {
        setLiked(!liked) // true
        setKeepLiked(true)
        if (!liked) {
            // Verifica se o número de likes do estado é igual o número de likes inicial
            if (Number(likes) === Number(postLikes)) {
                setPostLikes(Number(postLikes) + 1)
            }
            setTimeout(() => {
                setLiked(liked) // false
            }, 500)
        }
    }

    return (
        <article className="posts" data-test="post">
            <HeaderPost randomuser={randomUser} />

            <div className="post-img" onDoubleClick={() => handleHeart()}>
                <picture>
                    <img className="post-image" src={randomPost} alt="instagram-post" data-test="post-image" />
                    <LikeButton liked={liked} setLiked={setLiked} />
                </picture>
            </div>

            <footer>
                <IconsArea liked={keepLiked} setKeepLiked={setKeepLiked} likes={postLikes} setPostLikes={setPostLikes} />
                <CommentArea randomUser={randomUser} likes={postLikes} />
            </footer>

        </article >
    )
}

export default Post