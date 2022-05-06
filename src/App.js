import logo from './logo.svg';
import './App.css';
import AfficheEmoji from './Components/AfficheEmoji';
import SearchEmoji from './Components/SearchEmoji';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AfficheEmoji />
    </div>
  );
}

export default App;
