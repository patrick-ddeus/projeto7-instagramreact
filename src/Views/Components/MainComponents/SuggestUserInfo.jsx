import React from "react";

const SuggestUserInfo = ({username, nickname}) => (
    <div className="s-userinfo-area">
        <img src="assets/img/stories/catanacomics.svg" alt="" />
        <div className="s-userinfo">
            <p>{username}</p>
            <p>{nickname}</p>
        </div>
    </div>
)

export default SuggestUserInfo