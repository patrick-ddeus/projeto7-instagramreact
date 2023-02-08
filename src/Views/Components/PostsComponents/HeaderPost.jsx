import React from "react";

const HeaderPost = ({randomuser}) => (
    <header className="header-post">
        <div className="user-info flex-container">
            <img src={randomuser.userAvatar} style={{ width: "32px" }} alt="avatar do usuario"/>
            <p>{randomuser.user}</p>
        </div>
        <a href="">
            <ion-icon name="ellipsis-horizontal-outline" style={{ width: "20px", marginRight: "18px", marginTop: "15px", color: "black" }}/>
        </a>
    </header>
)

export default HeaderPost