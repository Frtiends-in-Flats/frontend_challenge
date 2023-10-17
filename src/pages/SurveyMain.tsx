import { FunctionComponent } from "react";
import SurveySection from "../components/survey/SurveySection";
import styles from "./SurveyMain.module.css";

const SurveyMain: FunctionComponent = () => {
    return (
        <>
        {/* the main contains all main page info */}
            <main className={styles.surveyStylesMain}>
                <SurveySection />
            </main>
        </>
    );
};

export default SurveyMain;
