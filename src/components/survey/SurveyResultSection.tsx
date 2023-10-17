import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RoomCard from "../homepage/RoomCard";
import styles from "../homepage/RoomsGallery.module.css";
import style from "./SurveyResultSection.module.css";
import { surveyResult } from "../../utils/SurveyResultRoom";
import * as strings from "../../textEnglish";
import { Link } from "react-router-dom";
import { BiRotateLeft } from "react-icons/bi";

const SurveyResultSection: FunctionComponent = () => {
    return (
        <>
        {/* restart button */}
            <div className={style.restartSurveyLink}>
                <Link to="/quiz">
                    <span>
                        <BiRotateLeft />
                    </span>
                    {strings.RESTART_SURVEY_LINK}
                </Link>
            </div>
            {/* section to show the survey result */}
            <section>
                <h1>{strings.RESULT_SURVEY_H1}</h1>
                <div className={styles.roomsgallery}>
                    {surveyResult.map((room, index) => (
                        <RoomCard key={index} {...room} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SurveyResultSection;
