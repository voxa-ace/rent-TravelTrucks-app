import React from 'react';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  if (!camper || !camper.gallery || camper.gallery.length === 0) {
    return null;
  }

  // Мапа для значків фільтрів (ключі відповідають даним з бекенду)
  const equipmentIcons = {
    AC: 'ac',
    bathroom: 'bathroom',
    kitchen: 'kitchen',
    TV: 'tv',
  };

  // Трансмісія (automatic/manual)
  const transmissionLabel = camper.transmission === 'automatic' ? 'Automatic' : 'Manual';

  // Відображаємо тільки ті фільтри, які є true
  const activeFeatures = Object.keys(equipmentIcons).filter((key) => camper[key]);

  return (
    <div className={styles.card}>
      {/* Фото кемпера */}
      <div className={styles.imageContainer}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={styles.camperImage}
        />
      </div>

      {/* Інформація про кемпера */}
      <div className={styles.infoContainer}>
        <div className={styles.priceContainer}>
          <h2 className={styles.camperTitle}>{camper.name}</h2>
          <span className={styles.price}>€{camper.price},00</span>
        </div>
        <div className={styles.ratingLocation}>
          <span className={styles.rating}>
            ★ {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <span className={styles.location}>{camper.location}</span>
        </div>

        {/* Статичний текст замість опису */}
        <p className={styles.description}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        {/* Значки обладнання */}
        <div className={styles.equipment}>
          {/* Трансмісія */}
          <div className={styles.equipmentBadge}>
            <svg className={styles.icon}>
              <use href={`/assets/icons/symbol-defs.svg#${camper.transmission}`} />
            </svg>
            <span>{transmissionLabel}</span>
          </div>

          {/* Інші фільтри */}
          {activeFeatures.map((feature) => (
            <div key={feature} className={styles.equipmentBadge}>
              <svg className={styles.icon}>
                <use href={`/assets/icons/symbol-defs.svg#${equipmentIcons[feature]}`} />
              </svg>
              <span>{equipmentIcons[feature]}</span>
            </div>
          ))}
        </div>

        {/* Кнопка */}
        <div className={styles.buttonContainer}>
          <button className={styles.showMoreButton}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
