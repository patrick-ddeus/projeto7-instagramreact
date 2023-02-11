import User from "./UsersModel";
import { generateRandomNumber } from "../utils/utils";

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

USER_HANDLER.addUser(new User("./assets/img/stories/1.png", "9gag", "coding", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/2.png", "meowed", "cat", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/3.png", "barked", "harrypotter", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/4.png", "nathanwpyle", "viagem", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/5.png", "wawawiwac", "apartamento", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/6.png", "respondeai", "math", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/7.png", "filomoderna", "filosofia", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User("./assets/img/stories/8.png", "memeriago.", "meme", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User(`${apiUnsplash("mickey", "66x66")}`, "Mickey", "mickey", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User(`${apiUnsplash("donald", "66x66")}`, "donald.", "donald", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User(`${apiUnsplash("duck", "66x66")}`, "duck", "duck", `${generateRandomNumber()}`))
USER_HANDLER.addUser(new User(`${apiUnsplash("dog", "66x66")}`, "pateta", "dog", `${generateRandomNumber()}`))

export default USER_HANDLER