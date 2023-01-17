import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import SavedCharacters from "./screens/savedCharacters";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/savedCharacters">
        <SavedCharacters />
      </Route>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
