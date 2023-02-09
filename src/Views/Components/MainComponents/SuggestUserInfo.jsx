import React, { useState } from "react";

const changeNickname = (userName, setuserName) =>{
    const newNickname = prompt("Digite o novo nome")
    if(!newNickname) return setuserName(userName)
    setuserName(newNickname)
}

const changeUserAvatar = (useAvatar, setUserAvatar) => {
    const newAvatar = prompt("Insira um novo avatar")
    let findImageInUrl = /^((http|https):\/\/)[\w|\.|\/|\-|?|=]+(\.jpg|\.jpeg|\.png|\.bmp|\.svg|\.webp)$/gm
    if(!newAvatar || !(findImageInUrl.test(newAvatar))) return setUserAvatar(useAvatar)
    setUserAvatar(newAvatar)
}

const SuggestUserInfo = ({ username, nickname }) => {
    const [userName, setuserName] = useState(username)
    const [useAvatar, setUserAvatar] = useState("assets/img/stories/catanacomics.svg")

    return (
    <div className="s-userinfo-area">
        <img src={useAvatar} alt="" onClick={() => {changeUserAvatar(useAvatar, setUserAvatar)}} data-test="profile-image"/>
        <div className="s-userinfo">
            <div className="username-area">
                <p data-test="name">{userName}</p> 
                <ion-icon name="pencil-outline" onClick={() => changeNickname(userName, setuserName)} data-test="edit-name"></ion-icon>
            </div>
            <p>{nickname}</p>
        </div>
        
    </div>
)}

export default SuggestUserInfo