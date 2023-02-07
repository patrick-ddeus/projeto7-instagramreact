import React from "react";
import Logo from "./HeaderComponents/Logo";
import SearchInput from "./HeaderComponents/SearchInput";
import MenuIcons from "./HeaderComponents/MenuIcons";

const NavBar = () => (
    <header id="header">
        <div className="header-container">
            <Logo />
            <SearchInput />
            <MenuIcons />
        </div>
    </header>
)

export default NavBar