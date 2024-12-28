import React from 'react';
import SVG from 'react-inlinesvg';

const RatingStars = ({ rating, totalStars = 5 }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: totalStars }).map((_, index) => (
        index < rating
          ? <SVG src="../../public/assets/icons/star_pressed.svg" width={15} height={15} />
          : <SVG src="../../public/assets/icons/star_default.svg" width={15} height={15} />
      ))}
    </div>
  );
};

export default RatingStars;