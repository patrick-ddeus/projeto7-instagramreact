import React from "react";

const CommentArea = ({randomUser, likes}) => {
    return (
    <div className="comment-area">
        <img src={randomUser.userAvatar} style={{width:"20px"}} alt="avatar do usuario"/>
        <span>
            Curtido por <b>{randomUser.user}</b> e <strong> outras {likes} pessoas</strong>
        </span>
    </div>
)}

export default CommentArea