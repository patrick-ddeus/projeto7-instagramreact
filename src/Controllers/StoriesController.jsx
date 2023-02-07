import React from "react";
import usersData from "../Models/usersData";

const StoriesList = () => (
    usersData.map((user) => (
        <li className="story" key={user.user}>
            <a href="#">
                <img src="assets/img/stories/stories_background.jpg" className="story-img"></img>
                <img src={user.userAvatar} className="story-user"></img>
                <p>{user.user}</p>
            </a>
        </li>
    ))
)

export default StoriesList