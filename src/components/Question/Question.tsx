import React, {useEffect, useState} from "react";
import { RouteComponentProps } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../../store/triviaActions";
import "./Question.scss";

interface QuestionIProps extends RouteComponentProps {
  questionIndex: number;
}

function Question(props: QuestionIProps) {

  const {questionIndex} = props;

  const {incorrect_answers, correct_answer, question} = useSelector(
    (state: any) => state.trivia.questions[questionIndex]
  );

  const currentAnswer = useSelector((state: any) => {
    return state.trivia.answers[questionIndex];
  });

  const dispatch = useDispatch();

  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (answers.length === 0) {
      const randomisedAnswers = [...incorrect_answers];

      randomisedAnswers.splice(
        Math.floor(Math.random() * incorrect_answers.length),
        0,
        correct_answer
      );
      setAnswers(randomisedAnswers);
    }
  }, [answers, incorrect_answers, correct_answer]);

  const onChange = (e: any) => {
    dispatch(answerQuestion(questionIndex, e.target.value));
  };

  return (
    <div className="question">
      <h3>{decodeURIComponent(question)}</h3>
      {answers.map((a, i) => {
        return (
          <label key={i}>
            <input
              type="radio"
              name={`question-${questionIndex}`}
              value={a}
              checked={currentAnswer === a}
              onChange={onChange}
            />
            <span>{decodeURIComponent(a)}</span>
          </label>
        );
      })}
    </div>
  );
}

export default Question;
