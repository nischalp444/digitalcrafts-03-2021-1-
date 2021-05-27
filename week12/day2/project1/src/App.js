import './App.css';
import React, {useState} from "react"
import AboutMe from "./components/AboutMe"
import Blog from "./components/Bolg"
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false)

  const login = () => {
    SetIsLoggedIn(true)
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            
            <Link to="/">  Home</Link>
            <Link to="/aboutme">  About Me</Link>
            <Link to="/blog">  Blog</Link>
            
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/aboutme">
            <AboutMe/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog">
            <Blog/>
          </Route>
        </Switch>
        <Switch>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
