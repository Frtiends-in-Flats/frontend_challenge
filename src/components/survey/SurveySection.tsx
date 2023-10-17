import { FunctionComponent } from "react";
import styles from "./SurveySection.module.css";
import SurveyCard from "./SurveyCard";

const SurveySection: FunctionComponent = () => {
    return(
        // section that contains the survey questions
        <section className={styles.surveySection}>
            <SurveyCard />
        </section>
        );
};

export default SurveySection;
