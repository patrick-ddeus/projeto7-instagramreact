import ReactDOM from "react-dom/client"
import Header from "./Views/Components/NavBar"
import Main from "./Views/Components/Main"

function App(){
  return(
    <div>
      <Header />
      <Main />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)