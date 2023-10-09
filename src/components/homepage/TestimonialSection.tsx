import { FunctionComponent } from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./TestimonialSection.module.css";
import * as strings from "../../textEnglish";
const TestimonialSection: FunctionComponent = () => {
  return (
    <div className={styles.testimonialsection}>
      <h1 >
        {strings.TESTIMONIAL_TITLE}
      </h1>
      <div className={styles.testimonialcardrow}>
        <TestimonialCard
          testimonialImage="/testimonialimage1.svg"
          testimonialQuotes="/testimonialquotes1.svg"
          testimonialText={strings.TESTIMONIAL_TEXT1}
          testimonialName={strings.TESTIMONIAL_NAME1}
          testimonialTitel={strings.TESTIMONIAL_TITLE1}
        />
        <TestimonialCard
          testimonialImage="/testimonialimage2.svg"
          testimonialQuotes="/testimonialquotes1.svg"

          testimonialText={strings.TESTIMONIAL_TEXT2}
          testimonialName={strings.TESTIMONIAL_NAME2}
          testimonialTitel={strings.TESTIMONIAL_TITLE2}
        />
        <TestimonialCard
          testimonialImage="/testimonialimage3.svg"
          testimonialQuotes="/testimonialquotes1.svg"

          testimonialText={strings.TESTIMONIAL_TEXT3}
          testimonialName={strings.TESTIMONIAL_NAME3}
          testimonialTitel={strings.TESTIMONIAL_TITLE3}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
