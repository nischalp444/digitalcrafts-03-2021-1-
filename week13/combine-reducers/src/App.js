import './App.css';
import Email from "./components/Email"
import UserName from "./components/Username"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
      <Email/>
      <UserName/>
      <button type="submit"></button>
      </form>
    </div>
  );
}

export default App;
