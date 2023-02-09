import React from "react";

const MenuItem = ({link, iconName}) => {
    return (
        <li>
            <a href={link}>
                <ion-icon name={iconName} className="menu-icon"></ion-icon>
            </a>
        </li>
    )
}

export default MenuItem