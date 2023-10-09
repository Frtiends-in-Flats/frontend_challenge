import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import RoomCard from "./RoomCard";
import styles from "./RoomsGallery.module.css";
import { rooms } from "../../utils/Room";
import * as strings from "../../textEnglish";

const RoomsGallery: FunctionComponent = () => {
  return (
    <section>
      <h1>{strings.ROOMS_GALLERY_TITLE}</h1>
      <div className={styles.roomsgallery}>
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsGallery;
