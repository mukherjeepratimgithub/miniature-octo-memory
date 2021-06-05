import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions'
import quizQuestions from './api/quizQuestions';

constructor(props) {
  super(props);

  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  };
};
componentDidMount() {
  const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

  this.setState({
    question: quizQuestions[0].question,
    answerOptions: shuffledAnswerOptions[0]
  });
}

shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

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
