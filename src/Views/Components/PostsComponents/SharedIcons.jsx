import React from "react";



const SharedIcons = ({ liked , setKeepLiked, likes ,setPostLikes }) => {
    function handleClick(){
        setKeepLiked(!liked)
        if(!liked){
            setPostLikes(Number(likes) + 1)
        }else{
            setPostLikes(Number(likes) - 1)
        }
    }

    return (
        <div className="shared-icons flex-container">
            <button onClick={() => handleClick()} data-test="like-post">
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