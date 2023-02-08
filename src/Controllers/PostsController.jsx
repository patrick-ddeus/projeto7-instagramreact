import React from "react";
import USER_HANDLER from "../Models/usersData";
import Post from "../Views/Components/PostsComponents/Post";

const apiUnsplash = (imagem, size) => `https://source.unsplash.com/${size}/?${imagem}`;

const PostsList = () => {
    const usersData = USER_HANDLER.getUsersData()
    const totalUsers = usersData.length

    function generateRandomIndex() {
        let randomIndex = Math.round(Math.random() * (totalUsers - 1))
        return randomIndex
    }

    return (
        usersData.map((user, index) => {
            const randomNumber = generateRandomIndex()
            const randomUser = usersData[randomNumber]
            const randomPost = apiUnsplash(usersData[randomNumber].post, "614x614")

            return < Post
                randomUser={randomUser}
                randomPost={randomPost}
                likes={user.likes}
                key={index} 
                />
        }
        )
    )
}

export default PostsList