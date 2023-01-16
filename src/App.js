import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import SavedCharacters from "./screens/savedCharacters";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/savedCharacters">
        <SavedCharacters />
      </Route>
    </BrowserRouter>
  );
}

export default App;
