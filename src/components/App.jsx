import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <p> {props.question}</p>;
}
function NextQuestion() {
  return <button> Button </button>;
}
function App() {
  let current_Question = 0;
  console.log(data);
  return (
    <div className="app">
      Trivia!
      <Question question={data[current_Question].question.text} />
      <NextQuestion />
    </div>
  );
}

export default App;
