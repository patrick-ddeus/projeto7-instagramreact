import React from "react";

const MenuIcons = () => (
    <ul className="h-icons-list">
        <li>
            <a href="#">
                <ion-icon name="paper-plane-outline" className="menu-icon"></ion-icon>
            </a>
        </li>
        <li className="hide-on-mobile">
            <a href="#">
                <ion-icon name="compass-outline" className="menu-icon"></ion-icon>
            </a>
        </li>
        <li className="hide-on-mobile">
            <a href="#">
                <ion-icon name="heart-outline" className="menu-icon"></ion-icon>
            </a>
        </li>
        <li className="hide-on-mobile">
            <a href="#">
                <ion-icon name="person-outline" className="menu-icon"></ion-icon>
            </a>
        </li>
    </ul>
)

export default MenuIcons