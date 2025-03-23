import React from 'react';
import SVG from 'react-inlinesvg';

const RatingStars = ({ rating, totalStars = 5 }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: totalStars }).map((_, index) => {
        const isFilled = index < rating;
        return (
          <SVG
            key={index}
            src={`../../public/assets/icons/${isFilled ? 'star_pressed' : 'star_default'}.svg`}
            width={15}
            height={15}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
