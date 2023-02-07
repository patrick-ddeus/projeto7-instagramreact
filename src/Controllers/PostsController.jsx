import React from "react";
import USER_HANDLER from "../Models/UsersData";
import Post from "../Views/Components/PostsComponents/Post";

const apiUnsplash = (imagem, size) => `https://source.unsplash.com/${size}/?${imagem}`;
const usersData = USER_HANDLER.getUsersData()
console.log(usersData)
let totalUsers = usersData.length
const usedIndexes = [];

function generateRandomIndex(){
    let randomIndex = Math.round(Math.random() * (totalUsers - 1))
    // while(usedIndexes.includes(randomIndex)){
    //     randomIndex = Math.round(Math.random() * (totalUsers--))
    //     continue
    // }
    usedIndexes.push(randomIndex)
    return randomIndex
}

const PostsList = () => (
    usersData.map((_, index) => {
        const randomNumber = generateRandomIndex()
        const randomUser = usersData[randomNumber]
        const randomPost = apiUnsplash(usersData[randomNumber].post, "614x614")

        return < Post randomUser={randomUser} randomPost={randomPost} key={index} />
    }
    )
)

export default PostsList