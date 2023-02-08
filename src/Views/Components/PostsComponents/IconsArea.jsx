import React from "react";
import SharedIcons from "./SharedIcons";
import SaveIcon from "./SaveIcon";

const IconsArea = ({liked, setKeepLiked, likes, setPostLikes}) => (
    <div className="icons-area flex-container">
        <SharedIcons liked={liked} setKeepLiked={setKeepLiked} likes={likes} setPostLikes={setPostLikes}/>
        <SaveIcon />
    </div>

)

export default IconsArea