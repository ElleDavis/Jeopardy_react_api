
import { useState, useEffect } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Category from './components/Category';
import Question from './components/Question';
import Answer from './components/Answer';

const App = ()=> {
  const [question, setQuestion]=useState(null)

  useEffect(()=>{
    fetch("https://jservice.io/api/random")
    .then ((res) => res.json())
    .then (jsondata => setQuestion(jsondata[0])
    )
  },[])

  return (
    <div className="App">
      <h1> Welcome to Jeopardy</h1>
      {/* {question && question.map((id) <Question data={question} key={id} /> )} */}
      {/* {question && <Question data={question} /> } */}
   
     {question &&<Scoreboard/>}
     {question &&<Question question={question}/>}
     {question &&<Category questionCategory={question}/>}
     {question &&<Answer questionAnswer={question}/>}
    </div>
  );
}

export default App;
