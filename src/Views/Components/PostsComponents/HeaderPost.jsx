import React from "react";

const HeaderPost = ({useravatar, username}) => (
    <header class="header-post">
        <div class="user-info flex-container">
            <img src={useravatar} style={{ width: "32px" }}/>
            <p>{username}</p>
        </div>
        <a href="">
            <ion-icon name="ellipsis-horizontal-outline" style={{ width: "20px", marginRight: "18px", marginTop: "15px", color: "black" }}/>
        </a>
    </header>
)

export default HeaderPost