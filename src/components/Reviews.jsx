import React from "react";
import styles from "./Reviews.module.css";
import RatingStars from "./RatingStars.jsx";

const Reviews = ({ reviews, reviewsSectionRef }) => {
  return (
    <div ref={reviewsSectionRef}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewAvatar}>
              {review.reviewer_name.slice(0, 1)}
            </div>
            <div className={styles.reviewNameRating}>
              <div className={styles.reviewName}>{review.reviewer_name}</div>
              <div>
                <RatingStars rating={review.reviewer_rating} />
              </div>
            </div>
          </div>
          <div className={styles.reviewComment}>{review.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
