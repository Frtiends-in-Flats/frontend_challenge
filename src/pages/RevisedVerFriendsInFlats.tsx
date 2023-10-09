import { FunctionComponent } from "react";
import SearchSection from "../components/homepage/SearchSection";
import RoomsGallery from "../components/homepage/RoomsGallery";
import TestimonialSection from "../components/homepage/TestimonialSection";
import FeaturesSection from "../components/homepage/FeaturesSection";
import styles from "./RevisedVerFriendsInFlats.module.css";
import * as strings from "../textEnglish";

const RevisedVerFriendsInFlats: FunctionComponent = () => {

  return (
      <>
    <div className={styles.revisedVerFriendsInFlats}>
      <SearchSection />
      <RoomsGallery/>
      <TestimonialSection />
      <FeaturesSection />
    </div>
      </>
  );
};

export default RevisedVerFriendsInFlats;
