import React from "react";
import SuggestContent from "./SuggestContent"

const MenuContainer = ({children}) => (
    <div className="container main-flex-container">
        <section id="main-content">
            {children}
        </section>

        <SuggestContent username="catanacomics" nickname="Catana"/>
    </div>
)

export default MenuContainer