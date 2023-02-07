import React, { useState } from "react";

const changeNickname = (userInfo, setUserInfo) =>{
    const newNickname = prompt("Digite o novo nome")
    if(!newNickname) return setUserInfo(userInfo)
    setUserInfo(newNickname)
}

const SuggestUserInfo = ({ username, nickname }) => {
    const [userInfo, setUserInfo] = useState(username)

    return (
    <div className="s-userinfo-area">
        <img src="assets/img/stories/catanacomics.svg" alt="" />
        <div className="s-userinfo">
            <div className="username-area">
                <p>{userInfo}</p>
                <ion-icon name="pencil-outline" onClick={() => changeNickname(userInfo, setUserInfo)}></ion-icon>
            </div>
            <p>{nickname}</p>
        </div>
        
    </div>
)}

export default SuggestUserInfo