import React from "react";
import SuggestContent from "./MainComponents/SuggestContent";

const Main = () => (
    <main id="main">
        <div className="container main-flex-container">
            <section id="main-content">
                <section id="stories-area">
                    <a href="#" className="story-button">
                        <img src="assets/img/seta.svg" alt="seta" id="seta-story" width="26px" />
                    </a>
                    <a href="#" className="story-button">
                        <ion-icon name="chevron-back-circle" style={{ width: "26px" }} id="seta-story-return"></ion-icon>
                    </a>
                    <ul id="stories-ul">
                        Stories inseridos com javascript
                    </ul>

                </section>

                <section id="posts-area">
                    Posts inseridos com javascript
                </section>

            </section>

            <SuggestContent />
        </div>
        <section id="menu-bottom">
            <ul className="menu-items">
                <li>
                    <a href="#">
                        <ion-icon name="home" className="menu-icon"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <ion-icon name="search-outline" className="menu-icon"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <ion-icon name="add-circle-outline" className="menu-icon"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <ion-icon name="heart-outline" className="menu-icon"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <ion-icon name="person-outline" className="menu-icon"></ion-icon>
                    </a>
                </li>
            </ul>
        </section>
    </main>
)

export default Main