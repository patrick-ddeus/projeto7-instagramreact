import React from "react";
import StoriesList from "../../Controllers/StoriesController";

const Stories = () => (
    <section id="stories-area">
        <a href="#" className="story-button">
            <img src="assets/img/seta.svg" alt="seta" id="seta-story" width="26px" />
        </a>
        <a href="#" className="story-button">
            <ion-icon name="chevron-back-circle" style={{ width: "26px" }} id="seta-story-return"></ion-icon>
        </a>
        <ul id="stories-ul">
            <StoriesList />
        </ul>

    </section>
)

export default Stories