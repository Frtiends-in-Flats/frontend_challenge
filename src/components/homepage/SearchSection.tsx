import { FunctionComponent } from "react";
import styles from "./SearchSection.module.css";
import * as strings from "../../textEnglish";

const SearchSection: FunctionComponent = () => {
  return (
    <div className={styles.searchsection}>
      <h1 className={styles.heading}>
          {strings.SEARCH_SECTION_HEADING}
        </h1>
        <div className={styles.subheading}>
          {strings.SEARCH_SECTION_SUBHEADING}

        </div>
    </div>
  );
};

export default SearchSection;
