import React, { useEffect, useState } from 'react'

function Quiz({ data, setTimeOut, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
        setClassName("answer active");
    }, [data, questionNumber])

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setTimeout(() => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        }, 3000);
    };
    return (
        <div className='quiz'>
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div
                        className={selectedAnswer === a ? className : "answer"}
                        onClick={() => !selectedAnswer && handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Quiz 