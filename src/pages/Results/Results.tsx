import React from "react";
import {RouteComponentProps} from "@reach/router";
import Button from "../../components/Button/Button";
import CorrectAnswers from '../../components/Answers/Answers'
import "./Results.scss";
import {useSelector} from "react-redux";

interface ResultsIProps extends RouteComponentProps {
}

function Results(props: ResultsIProps) {

  const questions = useSelector(
    (state: any) => state.trivia.questions
  );

  const answers = useSelector(
    (state: any) => state.trivia.answers
  );

  const correctAnswers = answers.reduce((correct: number, answer: string[], idx: number) => (questions[idx].correct_answer === answer ?
    correct + 1 :
    correct), 0);

  return (
    <div className="results">
      <CorrectAnswers correctAnswers={correctAnswers} numberOfQuestions={questions.length}/>
      <h1>Thank You!</h1>
      <div>
        <Button onClick={() => props.navigate && props.navigate("/")}>
          Start New Quiz
        </Button>
      </div>
    </div>
  );
}

export default Results;
