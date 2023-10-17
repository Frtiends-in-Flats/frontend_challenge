import { FunctionComponent } from "react";
import styles from "./SearchSection.module.css";
import * as strings from "../../textEnglish";
import { Link } from "react-router-dom";

const SearchSection: FunctionComponent = () => {
    return (
        <div className={styles.searchsection}>
            <h1 className={styles.heading}>{strings.SEARCH_SECTION_HEADING}</h1>
            <div className={styles.subheading}>{strings.SEARCH_SECTION_SUBHEADING}</div>
            {/* link to start the survey */}
            <Link to="/quiz" className={styles.mainLink}>
                {strings.SEARCH_SECTION_BUTTON}
            </Link>
        </div>
    );
};

export default SearchSection;
