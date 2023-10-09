import React, { FunctionComponent, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CSS, { Property } from "csstype";
import styles from "./RoomCard.module.css";
import { Room } from "../../utils/Room";
import { Link } from 'react-router-dom';
import * as strings from "../../textEnglish";

const RoomCard: FunctionComponent<Room> = ({
  picture,
  price,
  street,
  district,
  size,
  available,
  available_from,
  description,
  features,
  id
}) => {
  const availabilityText = useMemo(() => {
    return available ? strings.ROOM_CARD_AVAILABLE_TEXT : strings.ROOM_CARD_NOT_AVAILABLE_TEXT;
  }, [available]);

  return (
    <div className={styles.roomcard}>
      <img
        className={styles.roomcardPicture}
        src={picture}
      />
      <div className={styles.roomdetails}>
        <div className={styles.monthlyrent}>
            <div className={styles.div}> {price}€</div>
            <div className={styles.month}>/{strings.month}</div>
          </div>
        <div>
            {size}m<sup>2</sup>
       </div>
        <div >
             {street}
        </div>
        <div >
        {district}
        </div>
        <div >
           From {available_from}
        </div>
          <div className={styles.featuresContainer}>
              {features.map((feature, index) => (
                  feature.available && (
                      <div key={index} className={styles.featureItem}>
                          {feature.icon}
                      </div>
                  )
              ))}
          </div>
      </div>
      <div className={styles.buttonWrapper}>

        <Link to={`/roomDetails/${id}`} className={styles.fullWidthLink}>
          <Button className={styles.booknowbutton} variant="outline-primary">
            {strings.ROOM_CARD_BOOK_NOW_BUTTON_TEXT}
          </Button>
        </Link>
      </div>
    </div>


  );
};

export default RoomCard;