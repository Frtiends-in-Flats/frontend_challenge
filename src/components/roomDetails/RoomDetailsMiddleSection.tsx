import { FunctionComponent } from "react";
import { Link, useParams } from 'react-router-dom';
import { Room, rooms } from '../../utils/Room';
import styles from "./RoomDetailsMiddleSection.module.css";
import * as strings from "../../textEnglish";

const RoomDetailsMiddleSection: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const room = id ? rooms.find((r: Room) => r.id === parseInt(id)) : undefined;

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className={styles.roomdetailsmiddlesection}>
        {/* <iframe
          className={styles.roomtour}
          src={room.picture}
        /> */}
    </div>
  );
};

export default RoomDetailsMiddleSection;