import React from "react";

const MenuItems = () => (
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
)

export default MenuItems