const apiUnsplash = (imagem, size) => `https://source.unsplash.com/${size}/?${imagem}`;

const usersData = [
    { userAvatar: "assets/img/stories/1.png", user: "9gag", post: "coding" },
    { userAvatar: "assets/img/stories/2.png", user: "meowed", post: "cat" },
    { userAvatar: "assets/img/stories/3.png", user: "barked", post: "harrypotter" },
    { userAvatar: "assets/img/stories/4.png", user: "nathanwpyle", post: "viagem" },
    { userAvatar: "assets/img/stories/5.png", user: "wawawiwac", post: "apartamento" },
    { userAvatar: "assets/img/stories/6.png", user: "respondeai", post: "math" },
    { userAvatar: "assets/img/stories/7.png", user: "filomoderna", post: "filosofia" },
    { userAvatar: "assets/img/stories/8.png", user: "memeriago.", post: "meme" },
    { userAvatar: `${apiUnsplash("mickey", "66x66")}`, user: "Mickey", post: "mickey" },
    { userAvatar: `${apiUnsplash("donald", "66x66")}`, user: "donald.", post: "donald" },
    { userAvatar: `${apiUnsplash("duck", "66x66")}`, user: "duck", post: "duck" },
    { userAvatar: `${apiUnsplash("dog", "66x66")}`, user: "pateta", post: "dog" },
]

export default usersData