import React, { useState } from "react";

const SharedIcons = ({ liked }) => {
    const [keepLike, setKeepLike] = useState(false)

    return (
        <div className="shared-icons flex-container">
            <button onClick={() => setKeepLike(liked)}>
                <ion-icon name={liked ? "heart" : "heart-outline"} style={{
                    fontSize: "24px",
                    color: `${liked ? "red" : "black"}`
                }}></ion-icon>
            </button>
            <button>
                <img src="assets/img/chat.svg" alt="" />
            </button>
            <button >
                <img src="assets/img/send.svg" alt="" />
            </button>
        </div>
    )
}

export default SharedIcons