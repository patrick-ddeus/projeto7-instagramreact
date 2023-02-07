import User from "./UsersModel";
const USERS = Symbol("userdata")

class UsersData {
    constructor() {
        this[USERS] = []
    }

    addUser(UserObject) {
        this[USERS].push(UserObject)
    }

    getUsersData() {
        return [...this[USERS]]
    }
}

const apiUnsplash = (imagem, size) => `https://source.unsplash.com/${size}/?${imagem}`;

const USER_HANDLER = new UsersData()

USER_HANDLER.addUser(new User("./assets/img/stories/1.png", "9gag", "coding"))
USER_HANDLER.addUser(new User("./assets/img/stories/2.png", "meowed", "cat"))
USER_HANDLER.addUser(new User("./assets/img/stories/3.png", "barked", "harrypotter"))
USER_HANDLER.addUser(new User("./assets/img/stories/4.png", "nathanwpyle", "viagem"))
USER_HANDLER.addUser(new User("./assets/img/stories/5.png", "wawawiwac", "apartamento"))
USER_HANDLER.addUser(new User("./assets/img/stories/6.png", "respondeai", "math"))
USER_HANDLER.addUser(new User("./assets/img/stories/7.png", "filomoderna", "filosofia"))
USER_HANDLER.addUser(new User("./assets/img/stories/8.png", "memeriago.", "meme"))
USER_HANDLER.addUser(new User(`${apiUnsplash("mickey", "66x66")}`, "Mickey", "mickey"))
USER_HANDLER.addUser(new User(`${apiUnsplash("donald", "66x66")}`, "donald.", "donald"))
USER_HANDLER.addUser(new User(`${apiUnsplash("duck", "66x66")}`, "duck", "duck"))
USER_HANDLER.addUser(new User(`${apiUnsplash("dog", "66x66")}`, "pateta", "dog"))


export default USER_HANDLER