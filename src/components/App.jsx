import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      <p> {props.question}</p>
      <Answer ans={props.ans} />
    </div>
  );
}
function NextQuestion() {
  return <button> Next Question </button>;
}

function Answer(props) {
  let newItems = props.ans.map(displayAnswers);
  function displayAnswers(answerChoice) {
    return <p>{answerChoice}</p>;
  }
  return newItems;
  //return props.ans.map((choice) => <p>{choice}</p>);
}
function App() {
  let current_Question = 0;
  console.log(data);
  let [answerDisplayed, setAnswerDisplayed] = useState("");
  return (
    <div className="app">
      Trivia!
      <Question
        question={data[current_Question].question.text}
        ans={data[current_Question].question.choices}
      />
      <button
        onClick={() =>
          setAnswerDisplayed(
            data[current_Question].question.choices[
              data[current_Question].question.correct_choice_index
            ]
          )
        }
      >
        Correct Answer {answerDisplayed}
      </button>
      {answerDisplayed}
      <NextQuestion />
    </div>
  );
}

export default App;
