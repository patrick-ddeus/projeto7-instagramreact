import React from "react";
import CommentArea from "./CommentArea";
import IconsArea from "./IconsArea";

const Post = ({randomUser, randomPost}) => (
    <article className="posts" >
        <header className="header-post">
            <div className="user-info flex-container">
                <img src={randomUser.userAvatar} style={{ width: "32px" }} alt="user avatar"/>
                <p>{randomUser.user}</p>
            </div>
            <a href={window.location.href}>
                <ion-icon name="ellipsis-horizontal-outline" style={{ width: "20px", marginRight: "18px", marginTop: "15px", color: "black" }}/>
            </a>
        </header>
        <div className="post-img">
            <picture>
                <img src={randomPost} alt="instagram-post"/>
            </picture>
        </div>
        <footer>
            <IconsArea />
            <CommentArea randomUser={randomUser} />
        </footer>
    </article >
)

export default Post