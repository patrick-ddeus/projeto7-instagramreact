import React from "react";
import USER_HANDLER from "../Models/UsersData";

const StoriesList = () => (
    USER_HANDLER.getUsersData().map((user) => (
        <li className="story" key={user.user}>
            <a href={window.location.href}>
                <img src="assets/img/stories/stories_background.jpg" className="story-img" alt="story"></img>
                <img src={user.userAvatar} className="story-user" alt="story user"></img>
                <p>{user.user}</p>
            </a>
        </li>
    ))
)

export default StoriesList