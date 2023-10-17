import { FunctionComponent, useState, useEffect } from "react";
import * as strings from "../../textEnglish";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { surveyDataQuestions } from "../../local-json/fetchDataJson";
import { BiChevronLeft } from "react-icons/bi";
import styles from "./SurveyCard.module.css";

const SurveyCard: FunctionComponent = () => {
    // get data from the JSON
    const { surveyData, loading } = surveyDataQuestions();
    // initialize navigate
    const navigate = useNavigate();
    // create state to manage the index question
    const [questionIndex, setIndex] = useState(0);
    // set the first question in a variable
    const questionSurvey = surveyData[questionIndex];
    // store in a variable when is the end of the survey
    const isFinished = questionIndex >= surveyData.length;
    // change the progress bar with the question index
    const progress = (questionIndex / (surveyData.length - 1)) * 100;

    // state to store selected answers
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    // add the selected answer or update
    const handleAnswerClick = (answer: string) => {
        setSelectedAnswers((prevSelectedAnswers) => {
            // cpoy of the current selectedAnswers
            const copySelectedAnswers = [...prevSelectedAnswers];
            // store the answer on the index question
            // in case to press previous btn also update the answer
            copySelectedAnswers[questionIndex] = answer;
            return copySelectedAnswers;
        });
        // increase the state index when the user select an answet
        setIndex((questionIndex) => questionIndex + 1);
    };

    // function that manage the click event on the previous button
    const handlePrevClick = () => {
        // decrease the state index
        setIndex((questionIndex) => questionIndex - 1);
    };

    // create a state to show the loader before the questions
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const showTimer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);
        return () => {
            clearTimeout(showTimer);
        };
    }, []);

    // redirect user to result after 1000ms and show the loader
    useEffect(() => {
        if (isFinished && !loading) {
            const resultTimer = setTimeout(() => {
                navigate("/result");
            }, 1000);
            return () => {
                clearTimeout(resultTimer);
            };
        }
    }, [isFinished, loading]);

    return (
        <>
            {/* before questions and before tthe redirection to result show the loader */}
            {showLoading || isFinished || loading ? (
                <div className={styles.loader}></div>
            ) : (
                <>
                    <div className={styles.divBack}>
                        <Link to="/">
                            <span>
                                <BiChevronLeft />
                            </span>
                            {strings.GO_BACK_BUTTON}
                        </Link>
                    </div>
                    <article className={styles.articleQuestions}>
                        <progress value={progress} max="101" className={styles.progressBar}></progress>
                        <div className={styles.divQuestionInfo}>
                            <p className={styles.questionText}>{questionSurvey.question}</p>
                            <ul className={styles.ulAnswers}>
                                {questionSurvey.answers.map((answer, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleAnswerClick(answer)}
                                        className={`${styles.liAnswer} ${selectedAnswers[questionIndex] === answer ? styles.selectedLi : ""}`}
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            <Button onClick={handlePrevClick} disabled={questionIndex === 0} className={styles.btnPrev} variant="link">
                                <BiChevronLeft /> {strings.PREVIOUS_BUTTON}
                            </Button>
                        </div>
                    </article>
                </>
            )}
        </>
    );
};

export default SurveyCard;
