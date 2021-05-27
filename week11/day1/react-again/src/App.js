import './App.css';
import Class from "./components/Class"
import Name from "./components/Name"
import Age from "./components/Age"


function App() {
  const greeting = "Hello DC Students"
  return (
    <div className="App">
      
    <h1>App.js</h1>

    {/* props is the action of sending values down to another componenet. This happens from parent to child. also, props are suppose to be read only*/}

    <Class/>
    <Name/>
    <Age/>
    </div>
  );
}

export default App;