import React from "react";
import usersData from "../Models/usersData";
import Post from "../Views/Components/PostsComponents/Post";

const apiUnsplash = (imagem, size) => `https://source.unsplash.com/${size}/?${imagem}`;
let totalUsers = usersData.length
const usedIndexes = [];

function generateRandomIndex(){
    let randomIndex = Math.round(Math.random() * (totalUsers - 1))
    if((usedIndexes.includes(randomIndex))){
        totalUsers--
        randomIndex = Math.round(Math.random() * (totalUsers))
    }
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