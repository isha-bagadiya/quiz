import React, { useEffect, useState } from "react";
import "../component/quiz.css"
import { Question } from "../model/question";
import { QuizService } from "../service/quizservice";

const quizService = new QuizService();

const Quiz: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const fetchedQuestions = quizService.getQuestions();
        setQuestions(fetchedQuestions);
    }, [])

    const handleOptionClick = (index: number) => {
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        setShowAnswer(true);
        setTimeout(() => {
            setShowAnswer(false);
            setSelectedOption(null);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }, 2000);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setShowAnswer(false);
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="quiz-container">
                <h2>Quiz Completed!</h2>
                <button className="submit-button" onClick={handleRestart}>Restart</button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div className="quiz-container">
            <h2 className="question">{currentQuestion.question}</h2>
            <div className="options">
                {currentQuestion.options.map((option, index) => (
                    <button key={index}
                        onClick={() => handleOptionClick(index)}
                        className="option-button"
                        style={{
                            backgroundColor: showAnswer && index === currentQuestion.correctAnswer
                                ? "green"
                                : showAnswer && index === selectedOption
                                    ? 'red'
                                    : selectedOption === index
                                        ? 'yellow'
                                        : ''
                        }}

                    >{option}</button>
                ))}
            </div>

            <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
    )
}


export default Quiz;