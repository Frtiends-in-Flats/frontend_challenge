import React, { FunctionComponent } from "react";
import RoomDetailsMiddleSection from "../components/roomDetails/RoomDetailsMiddleSection";
import DetailsSection from "../components/roomDetails/DetailsSection";
import styles from "./RoomDetails.module.css";
import * as strings from "../textEnglish";

// import navigate
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiChevronLeft } from "react-icons/bi";


const RoomDetails: FunctionComponent = () => {
    // initialize navigate to control from which path comes the user
    const navigate = useNavigate();
    return (
        <>
            <section className={styles.roomDetails}>
                {/* the client is returned to the corresponding route ('/'home or '/result') */}
                <Button onClick={() => navigate(-1)} className={styles.btnBack} variant="link">
                    <BiChevronLeft /> {strings.GO_BACK_BUTTON}
                </Button>
                <div className={styles.bookyourflatontherightdate}>
                    <h1 className={styles.heading}>{strings.bookYourFlatText}</h1>
                </div>
                <RoomDetailsMiddleSection />
                <DetailsSection />
            </section>
        </>
    );
};

export default RoomDetails;
