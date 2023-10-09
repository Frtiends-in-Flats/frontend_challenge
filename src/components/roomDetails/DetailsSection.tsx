import React, { FunctionComponent,useState } from 'react';
import { BiWifi } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Room, rooms } from '../../utils/Room';
import { MdPets, MdHotTub, MdLocalLaundryService, MdSmokeFree, MdKitchen } from "react-icons/md";
import { createRoomApplicationLoggedInDTO } from "../../dto/roomApplication";
import { applyRoomLoggedIn, applyRoomNotLoggedIn } from "../../services/RoomApplicationService";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import * as strings from "../../textEnglish";

import styles from './DetailsSection.module.css';

const DetailsSection: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const room = id ? rooms.find((r: Room) => r.id === parseInt(id)) : undefined;

    if (!room) {
        return <div>Room not found</div>;
    }

    const navigate = useNavigate();

    return (
            <div className={styles.detailsSection}>
                <div className={styles.leftColumn}>
                    <div className={styles.featuresSection}>
                        <div className={styles.titleAndContent}>
                            <h3 className={styles.sectionTitle} >{strings.features}</h3>
                            <div className={styles.featuresList} >
                                {room.features.map((feature, index) => (
                                        feature.available && (
                                            <div key={index} className={styles.featureItem}>
                                                {feature.icon}
                                                <p className={styles.featureName}>{feature.name}</p>
                                            </div>
                                        )
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.descriptionSection}>
                          <div className={styles.titleAndContent}>
                              <h3 className={styles.sectionTitle} >{strings.price}</h3>
                               <p className={styles.featureName}>{room.price} € </p>
                         </div>
                    </div>
                    <div className={styles.descriptionSection}>
                        <div className={styles.titleAndContent}>
                            <h3 className={styles.sectionTitle} >{strings.location}</h3>
                            <p className={styles.featureName}>{room.street}, {room.district}</p>
                        </div>
                    </div>
                    <div className={styles.descriptionSection}>
                         <div className={styles.titleAndContent}>
                             <h3 className={styles.sectionTitle}>{strings.size}</h3>
                             <p className={styles.featureName}>{room.size} m<sup className="superscript">2</sup></p>
                        </div>
                    </div>
                    <div className={styles.descriptionSection}>
                          <div className={styles.titleAndContent}>
                            <h3 className={styles.sectionTitle}>{strings.availableFrom}</h3>
                            <p className={styles.featureName}>{room.available_from.toUpperCase()}</p>
                        </div>
                   </div>
                </div>
                <div className={styles.rightColumn}>
                  {(
                    <Button className={styles.buttonrequest} variant="outline-primary">
                        {strings.requestRoom}
                    </Button>
                  )}
                </div>
            </div>
        );
    };

export default DetailsSection;