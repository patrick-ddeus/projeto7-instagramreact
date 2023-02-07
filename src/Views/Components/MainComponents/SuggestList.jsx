import React from "react";

const SuggestList = ({ children , href}) => (
    <ul className="suggestions-list">
        <li className="suggestions-li">
            <p>Sugestões para você</p>
            <a href={href}>Ver tudo</a>
        </li>
        {children}
    </ul>
)

export default SuggestList