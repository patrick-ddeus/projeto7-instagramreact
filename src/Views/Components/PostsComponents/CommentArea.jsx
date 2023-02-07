import React from "react";

const CommentArea = ({randomUser}) => (
    <div className="comment-area">
        <img src={randomUser.userAvatar} style={{width:"20px"}}/>
        <span>
            Curtido por <b>{randomUser.user}</b> e <strong> outras {Math.round(Math.random() * 100000).toLocaleString('pt-BR')} pessoas</strong>
        </span>
    </div>
)

export default CommentArea