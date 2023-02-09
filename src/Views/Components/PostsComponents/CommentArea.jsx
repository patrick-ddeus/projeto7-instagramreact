import React, {useState, useEffect} from "react";

const CommentArea = ({randomUser, likes}) => {
    const [currentLikes, setCurrentLikes] = useState(likes)
    
    useEffect(() =>{
        setCurrentLikes(currentLikes.toLocaleString('pt-BR'))
    }, [currentLikes])

    return (
    <div className="comment-area">
        <img src={randomUser.userAvatar} style={{width:"20px"}} alt="avatar do usuario"/>
        <span>
            Curtido por <b>{randomUser.user}</b> e <strong> outras <span data-test="likes-number">{likes.toLocaleString('pt-BR')}</span> pessoas</strong>
        </span>
    </div>
)}

export default CommentArea