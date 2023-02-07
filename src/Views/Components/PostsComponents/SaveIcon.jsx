import React, { useState } from "react";

const SaveIcon = () => {
    const [saved, setSaved] = useState(false)

    return (
    <div>
        <button className={`${saved ? "salvo" : ""} save-icon`} onClick={() => {setSaved(!saved)}}>
        <ion-icon name={saved ? "bookmark" : "bookmark-outline"}></ion-icon>
        </button>
    </div>
)}

export default SaveIcon