import React, { useState, useEffect } from 'react';
import styles from './FavoriteButton.module.css';
import spriteUrl from '../assets/icons/symbol-defs.svg?url';

const FavoriteButton = ({ camperId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Завантаження стану з localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(camperId));
  }, [camperId]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== camperId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(camperId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <svg
      className={styles.favoriteIcon}
      onClick={handleFavoriteClick}
      width="25"
      height="24"
    >
      <use href={`${spriteUrl}#${isFavorite ? 'icon-heart-pressed' : 'icon-heart-default'}`} />
    </svg>
  );
};

export default FavoriteButton;
