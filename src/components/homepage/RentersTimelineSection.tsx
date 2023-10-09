import { FunctionComponent } from "react";
import styles from "./RentersTimelineSection.module.css";
const RentersTimelineSection: FunctionComponent = () => {
  return (
    <div className={styles.renterstimelinesection}>
      <img
        className={styles.patrickPerkins3wyldrjxhEUnIcon}
        alt=""
        src="/patrickperkins3wyldrjxheunsplash-1@2x.png"
      />
      <div className={styles.renterstimeilinetext}>
        <div className={styles.bookYourPerfect}>
          Book your perfect Accommodation
        </div>
        <div className={styles.takeTheHassle}>
          Take the hassle out of searching a comfortable flat for your student
          life
        </div>
        <img
          className={styles.renterstimeilinetextChild}
          alt=""
          src="/arrow-3.svg"
        />
      </div>


      <div className={styles.timelinefeature1}>
        <div className={styles.bestpriceicon}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-701.svg" />
            <div className={styles.div}>$</div>
          </div>
          <img
            className={styles.bestpriceiconChild}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div className={styles.bestPriceParent}>
          <div className={styles.bestPrice}>{`Best Price `}</div>
          <div className={styles.flatsRentAre}>
            Flat’s Rent are cheaper than student dorms
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentersTimelineSection;
