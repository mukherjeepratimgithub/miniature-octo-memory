import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Questionaire in React</h2>
      </header>
      <Questions content="What is the best lesson you have got so far?" />
    </div>
  );
}

export default App;
