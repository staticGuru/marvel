import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/home';
import SavedCharacters from './screens/savedCharacters';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route path="/character/:id" component={SavedCharacters} />
    </div>
  </BrowserRouter>
  );
}

export default App;
