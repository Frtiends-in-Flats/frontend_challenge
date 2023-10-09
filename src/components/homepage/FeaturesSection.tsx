import { FunctionComponent, memo } from "react";
import styles from "./FeaturesSection.module.css";
import * as strings from "../../textEnglish";

const FeaturesSection: FunctionComponent = memo(() => {
  return (
    <div className={styles.featuressection}>
      <h1> {strings.FEATURES_SECTION_TITLE}</h1>
      <div className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.frameWrapper}>
                <img
                  className={styles.featuresImage}
                  alt=""
                  src="/perfect-flat.svg"
                />
                <div className={styles.perfectFlatGuaranteeParent}>
                    {strings.KI_MATCHING}
              </div>
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.featuresImage}
              alt=""
              src="/24-hours-service.svg"
            />
              <div className={styles.perfectFlatGuaranteeParent}>
                                  {strings.HOURS_SERVICE}
                            </div>
          </div>
        </div>   <div className={styles.groupWrapper}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.featuresImage}
              alt=""
              src="/pricingImage.svg"
            />
              <div className={styles.perfectFlatGuaranteeParent}>
                                  {strings.BEST_PRICE}
                            </div>
          </div>
        </div>


      </div>
    </div>
  );
});

export default FeaturesSection;
