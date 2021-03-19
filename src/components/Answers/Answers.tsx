import React from "react";
import {RouteComponentProps} from "@reach/router";

interface AnswersIProps extends RouteComponentProps {
  correctAnswers: number;
  numberOfQuestions: number;
}

export default function CorrectAnswers(props: AnswersIProps){

  const {correctAnswers, numberOfQuestions } = props;

  return<div> <h4 data-testid="answers" >You answered {correctAnswers} out of {numberOfQuestions} questions correctly.</h4></div>;
}
