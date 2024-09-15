import React from 'react';
import styles from './LoadMoreButton.module.css'; // Можна додати в окремий файл стилів або зберегти в тому самому

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={styles.loadMoreButtonContainer}>
      <button className={styles.loadMoreButton} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
