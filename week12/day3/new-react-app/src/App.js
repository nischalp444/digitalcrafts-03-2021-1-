import './App.css';
import React, { useState }from "react"
import Counter from "./components/counter"
import Component2 from "./components/component2"

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
     <Counter />
     <Component2/>
    </div>
  );
}

export default App;
