import React from "react";

function LikeButton({liked}) {
    return (
      <div className={`${liked ? "heartStyle" : ""} big-heart`}>
        <ion-icon name="heart"></ion-icon>
      </div>
    );
  }


  export default LikeButton