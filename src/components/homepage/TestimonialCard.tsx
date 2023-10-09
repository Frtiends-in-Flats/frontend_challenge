import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./TestimonialCard.module.css";

type TestimonialCardType = {
  testimonialImage?: string;
  testimonialQuotes?: string;
  testimonialDivider?: string;
  testimonialText?: string;
  testimonialName?: string;
  testimonialTitel?: string;

  /** Style props */
  testimonialCardFlex?: Property.Flex;
};

const TestimonialCard: FunctionComponent<TestimonialCardType> = ({
  testimonialImage,
  testimonialQuotes,
  testimonialDivider,
  testimonialCardFlex, testimonialText,testimonialName, testimonialTitel
}) => {
  const testimonialCardStyle: CSS.Properties = useMemo(() => {
    return {
      flex: testimonialCardFlex,
    };
  }, [testimonialCardFlex]);

  return (
    <div className={styles.testimonialcard}>
      <div className={styles.testimonialimagegroup}>
        <img
          className={styles.testimonialimageIcon}
          alt=""
          src={testimonialImage}
        />
      </div>
      <div className={styles.testimonialtext}>
        <div className={styles.testimonial}>
          {testimonialText}
        </div>
        <img
          className={styles.testimonialdividerIcon}
          alt=""
          src={testimonialDivider}
        />
        <div className={styles.testinomailname}>{testimonialName}</div>
        <div className={styles.testimonialname}>{testimonialTitel}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
