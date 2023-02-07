import React from "react";

const suggestions = [
    {
        imgSrc: "assets/img/stories/badvibesmemes.svg",
        user: "bad.vibes.memes",
        description: "Segue você"
    },

    {
        imgSrc: "assets/img/stories/chibirdart.svg",
        user: "chibirdart",
        description: "Segue você"
    },

    {
        imgSrc: "assets/img/stories/razoesparaacreditar.svg",
        user: "razoesparaacreditar",
        description: "Novo no instagram"
    },

    {
        imgSrc: "assets/img/stories/adorableanimals.svg",
        user: "adorable_animals",
        description: "Segue você"
    },

    {
        imgSrc: "assets/img/stories/smallcutecats.svg",
        user: "smallcutecats",
        description: "Segue você"
    },

]

const SuggestContent = () => (
    <aside id="suggest-content">
        <div className="s-userinfo-area">
            <img src="assets/img/stories/catanacomics.svg" alt="" />
            <div className="s-userinfo">
                <p>catanacomics</p>
                <p>Catana</p>
            </div>
        </div>

        <ul className="suggestions-list">
            <li className="suggestions-li">
                <p>Sugestões para você</p>
                <a href="#">Ver tudo</a>
            </li>
            {suggestions.map((suggestion) => (
                <li className="suggestions-li" key={suggestion.user}>
                    <div className="suggestion-user">
                        <img src={suggestion.imgSrc} alt="" />
                        <div className="suggestion-userinfo">
                            <p>{suggestion.user}</p>
                            <p>{suggestion.description}</p>
                        </div>
                    </div>
                    <a href="#" className="s-follow">Seguir</a>
                </li>
            ))}

        </ul>
        <footer>
            <p className="suggestion-about">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            <p className="copywrite">© 2021 INSTAGRAM DO FACEBOOK</p>
        </footer>
    </aside>
)

export default SuggestContent