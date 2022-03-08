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
  return props.ans.map((choice) => <p>{choice}</p>);
}
function App() {
  let current_Question = 0;
  console.log(data);
  return (
    <div className="app">
      Trivia!
      <Question
        question={data[current_Question].question.text}
        ans={data[current_Question].question.choices}
      />
      <NextQuestion />
    </div>
  );
}

export default App;
