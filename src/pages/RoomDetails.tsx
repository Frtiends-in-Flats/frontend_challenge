import React, { FunctionComponent } from "react";
import RoomDetailsMiddleSection from "../components/roomDetails/RoomDetailsMiddleSection";
import DetailsSection from "../components/roomDetails/DetailsSection";
import styles from "./RoomDetails.module.css";

import * as strings from "../textEnglish";

const RoomDetails: FunctionComponent = () => {
  return (
    <>
      <section className={styles.roomDetails}>
        <div className={styles.bookyourflatontherightdate}>
          <h1 className={styles.heading}>
            {strings.bookYourFlatText}
          </h1>
        </div>
        <RoomDetailsMiddleSection />
        <DetailsSection />
      </section>
    </>
  );
};

export default RoomDetails;