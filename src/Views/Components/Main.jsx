import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MenuItems from "./MainComponents/MenuItems";
import MenuContainer from "./MainComponents/MainContainer";

const Main = () => (
    <main id="main">
        <MenuContainer >
            <Stories />
            <Posts />
        </MenuContainer>
        <section id="menu-bottom">
            <MenuItems />
        </section>
    </main>
)

export default Main