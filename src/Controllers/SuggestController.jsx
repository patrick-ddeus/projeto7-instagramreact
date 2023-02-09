import React from "react";
import SUGGESTION_HANDLER from "../Models/SuggestionStore";

const SuggestItems = () => (
    SUGGESTION_HANDLER.getSuggestions().map((suggestion) => (
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

export default SuggestItems