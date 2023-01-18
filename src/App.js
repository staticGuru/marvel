import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import React, { Suspense } from "react";
const SavedCharacters = React.lazy(() => import('./screens/savedCharacters'));
const Home = React.lazy(() => import('./screens/home'));

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        </Suspense>
      </Route>
      <Route exact path="/savedCharacters">
      <Suspense fallback={<div>Loading...</div>}>
        <SavedCharacters />
        </Suspense>
      </Route>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
