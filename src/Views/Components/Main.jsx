import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MenuList from "./MainComponents/MenuItems";
import MenuItem from "./MainComponents/MenuItem";
import MenuContainer from "./MainComponents/MainContainer";

const Main = () => (
    <main id="main">
        
        <MenuContainer >
            <Stories />
            <Posts />
        </MenuContainer>

        <section id="menu-bottom">
            <MenuList >
                <MenuItem link={"#"} iconName={"home"} />
                <MenuItem link={"#"} iconName={"search-outline"} />
                <MenuItem link={"#"} iconName={"add-circle-outline"} />
                <MenuItem link={"#"} iconName={"heart-outline"} />
                <MenuItem link={"#"} iconName={"person-outline"} />
            </MenuList>
        </section>
    </main>
)

export default Main