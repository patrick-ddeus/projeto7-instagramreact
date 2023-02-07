import Suggestion from "./SuggestionModel"
const SUGGESTION = Symbol("suggestion")

class SuggestionStore {
    constructor() {
        this[SUGGESTION] = []
    }

    addSuggestion(suggestionObject) {
        this[SUGGESTION].push(suggestionObject)
    }

    getSuggestions(){
        return [...this[SUGGESTION]]
    }
}

const SUGGESTION_HANDLER = new SuggestionStore()

SUGGESTION_HANDLER.addSuggestion(new Suggestion("assets/img/stories/badvibesmemes.svg", "bad.vibes.memes", "Segue você"))
SUGGESTION_HANDLER.addSuggestion(new Suggestion("assets/img/stories/chibirdart.svg", "chibirdart", "Segue você"))
SUGGESTION_HANDLER.addSuggestion(new Suggestion("assets/img/stories/razoesparaacreditar.svg", "razoesparaacreditar", "Novo no instagram"))
SUGGESTION_HANDLER.addSuggestion(new Suggestion("assets/img/stories/adorableanimals.svg", "adorable_animals", "Segue você"),)
SUGGESTION_HANDLER.addSuggestion(new Suggestion("assets/img/stories/smallcutecats.svg", "smallcutecats", "Segue você"))

export default SUGGESTION_HANDLER