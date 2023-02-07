import React from "react";
import SuggestUserInfo from "./SuggestUserInfo";
import SuggestItems from "../../../Controllers/SuggestController"
import SuggestList from "./SuggestList";
import SuggestFooter from "./SuggestFooter";

const SuggestContent = ({username, nickname, href}) => (
    <aside id="suggest-content">
        <SuggestUserInfo username={username} nickname={nickname}/>

        <SuggestList href={href}> 
            <SuggestItems />
        </SuggestList>

        <SuggestFooter>
            <p className="suggestion-about">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            <p className="copywrite">© 2021 INSTAGRAM DO FACEBOOK</p>
        </SuggestFooter>
    </aside>
)

export default SuggestContent