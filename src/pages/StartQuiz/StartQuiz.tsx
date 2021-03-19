import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {RouteComponentProps} from "@reach/router";
import Button from "../../components/Button/Button";
import {generateQuestions, resetAnswers} from "../../store/triviaActions";

interface TriviaIProps extends RouteComponentProps {
}

function Trivia(props: TriviaIProps) {
  const dispatch = useDispatch();

  // Check if trivia data is downloaded to display Start Quiz button
  const isTriviaData = useSelector(
    (state: any) =>
      (state.trivia.questions && state.trivia.questions.length > 0) || false
  );

  // Get trivia
  dispatch(generateQuestions());

  const startQuiz = () => {
    // Clear the last set of answers
    dispatch(resetAnswers());
    props.navigate && props.navigate("/quiz")
  };

  return (
    <div>
      {!isTriviaData && <div>Please wait, loading.</div>}
      {isTriviaData && (
        <Button onClick={startQuiz}>
          Start Quiz
        </Button>
      )}
    </div>
  );
}

export default Trivia;
