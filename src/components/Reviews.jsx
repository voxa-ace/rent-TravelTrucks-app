import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h3>User Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>{review.comment}</p>
          <p>Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
