
import { Component } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Category from './components/Category';
import Question from './components/Question';
import Answer from './components/Answer';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1> Welcome to Jeopardy</h1>

    
   
     <Scoreboard/>
     <Question/>
     <Category/>
     <Answer/>


    </div>
  );
    }
}

export default App;
