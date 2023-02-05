import React, {useState} from "react";
import data from "../data.json";
import Question from "./Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import Results from "./Results";


const QuestionForm = () => {
    const[answers, setAnswers] = useState([]);
    const[submitted, setSubmitted] = useState(false);
    const[canSubmit, setCanSubmit] = useState(false);
    const validate = () => {
        setCanSubmit(answers.length === data.questions.length && !answers.includes(undefined));
        console.log(canSubmit);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(!submitted);
        console.log(answers);
    };

    return (
        <div className="question-form">
            <h2 style={{fontSize: 30}}>
                Quiz: Do Your Parents Miss You or Do They Just Feel Obligated to Talk to You?
            </h2>
            <img src={require("../quizImage.jpg")} alt='image' style={{width: "550px", height: "350px", marginBottom: 25}}/>
            <Form onSubmit={handleSubmit}>
                {data.questions.map((q, index) => (
                    <Question
                        key={index}
                        question={q}
                        index={index}
                        setAnswers={setAnswers}
                        validate={validate}
                        submitted={submitted}
                        />
                ))}
                <Button type="submit"
                        style={{ width: "500px", height: "40px", marginBottom: 25}}
                        disabled={!canSubmit}>
                    {submitted ? "Retake Quiz" : "Show me my results!"}
                </Button>
                {submitted ? <Results answers={answers} /> : null}
            </Form>
        </div>
    );
};

export default QuestionForm;

