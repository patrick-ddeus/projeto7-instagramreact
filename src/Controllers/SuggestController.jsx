import React from "react";
import suggestions from "../Models/suggestions";

const SuggestList = () => (
    suggestions.map((suggestion) => (
        <li className="suggestions-li" key={suggestion.user}>
            <div className="suggestion-user">
                <img src={suggestion.imgSrc} alt="" />
                <div className="suggestion-userinfo">
                    <p>{suggestion.user}</p>
                    <p>{suggestion.description}</p>
                </div>
            </div>
            <a href="#" className="s-follow">Seguir</a>
        </li>
    ))
)

export default SuggestList