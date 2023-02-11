import React, { useState } from "react";


const SuggestUserInfo = ({ username, nickname }) => {
    const [userName, setUserName] = useState(username)
    const [useAvatar, setUserAvatar] = useState("assets/img/stories/catanacomics.svg")

    const changeNickname = () => {
        const newNickname = prompt("Digite o novo nome")
        if (!newNickname) return setUserName(userName)
        setUserName(newNickname)
    }

    const changeUserAvatar = () => {
        const newAvatar = prompt("Insira um novo avatar")
        let findImageInUrl = /^((http|https):\/\/)[\w|\.|\/|\-|?|=]+(\.jpg|\.jpeg|\.png|\.bmp|\.svg|\.webp)$/gm
        if (!newAvatar || !(findImageInUrl.test(newAvatar))) return setUserAvatar(useAvatar)
        setUserAvatar(newAvatar)
    }

    return (
        <div className="s-userinfo-area">
            <img src={useAvatar} alt="" onClick={() => { changeUserAvatar() }} data-test="profile-image" />
            <div className="s-userinfo">
                <div className="username-area">
                    <p data-test="name">{userName}</p>
                    <ion-icon name="pencil-outline" onClick={() => changeNickname()} data-test="edit-name"></ion-icon>
                </div>
                <p>{nickname}</p>
            </div>

        </div>
    )
}

export default SuggestUserInfo