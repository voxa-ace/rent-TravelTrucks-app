import React from 'react';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <div className={styles.camperItem}>
      <img
        src={camper.gallery[0]?.thumb}
        alt={camper.name}
        className={styles.camperImage}
      />
      <div className={styles.camperDetails}>
        <div className={styles.camperTitleContainer}>
          <h2>{camper.name}</h2>
          <div className={styles.priceAndLike}>
            <span>€{camper.price},00</span>
            <svg className={styles.heartIcon}>
              <use href="/assets/icons/symbol-defs.svg#heart" />
            </svg>
          </div>
        </div>
        <div className={styles.ratingAndLocation}>
          <span>{camper.rating} ({camper.reviews} Reviews)</span>
          <span className={styles.camperLocation}>{camper.location}</span>
        </div>
        <p className={styles.camperDescription}>{camper.description}</p>
        <div className={styles.equipmentBadges}>
          {Array.isArray(camper.equipment) && camper.equipment.length > 0 ? (
            camper.equipment.map((equip) => (
              <div key={equip} className={styles.equipmentBadge}>
                <svg className={styles.badgeIcon}>
                  <use href={`/assets/icons/symbol-defs.svg#${equip}`} />
                </svg>
                <span>{equip}</span>
              </div>
            ))
          ) : (
            <p>No equipment available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
