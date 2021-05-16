import "./index.css"
import AboutMe from "./components/AboutMe"
import Nav from "./components/Nav"
import AboutContainer from "./components/AboutContainer"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <AboutMe/>
      <AboutContainer/>
      <Nav/>
      <Sidebar/>
     </div>
  )}

export default App;


//react manages data with state

//STATE
//where you can store data temporarly