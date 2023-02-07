import ReactDOM from "react-dom/client"
import NavBar from "./Views/Components/NavigationComponents/HeaderComponents/NavBar"
import Main from "./Views/Components/NavigationComponents/HeaderComponents/Main"

function App(){
  return(
    <div>
      <NavBar />
      <Main />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)