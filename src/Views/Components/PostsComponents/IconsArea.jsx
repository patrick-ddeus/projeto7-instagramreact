import React from "react";
import SharedIcons from "./SharedIcons";
import SaveIcon from "./SaveIcon";

const IconsArea = ({liked}) => (
    <div className="icons-area flex-container">
        <SharedIcons liked={liked} />
        <SaveIcon />
    </div>

)

export default IconsArea