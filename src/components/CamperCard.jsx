import React from 'react';
import styles from './CamperCard.module.css';
import spriteUrl from '../assets/icons/symbol-defs.svg?url';
import FavoriteButton from './FavoriteButton';  // Імпортуємо компонент

const CamperCard = ({ camper }) => {
  if (!camper || !camper.gallery || camper.gallery.length === 0) {
    return null;
  }

  const reviewsCount = Array.isArray(camper.reviews) ? camper.reviews.length : 0;

  // Мапа для ідентифікаторів іконок
  const equipmentIcons = {
    AC: 'icon-wind',
    bathroom: 'icon-droplet',
    kitchen: 'icon-cup-hot',
    TV: 'icon-tv',
  };

  // Отримуємо назву трансмісії та ідентифікатор іконки
  const transmissionLabel = camper.transmission === 'automatic' ? 'Automatic' : 'Manual';
  const transmissionIconId = 'icon-automatic'; // Використовуємо іконку для трансмісії

  // Отримуємо тип двигуна
  const engineType = camper.engine || 'Unknown'; // Беремо тип двигуна з бекенду

  // Відображаємо тільки ті фільтри, які є true
  const activeFeatures = Object.keys(equipmentIcons).filter((key) => camper[key]);

  return (
    <div className={styles.card}>
      {/* Фото кемпера */}
      <div className={styles.imageContainer}>
        <img src={camper.gallery[0].thumb} alt={camper.name} className={styles.camperImage} />
      </div>

      {/* Інформація про кемпера */}
      <div className={styles.infoContainer}>
        <div className={styles.headerContainer}>
          <h2 className={styles.camperTitle}>{camper.name}</h2>
          
          {/* Контейнер для ціни та лайка */}
          <div className={styles.priceLikeContainer}>
            <span className={styles.price}>€{camper.price},00</span>
            <FavoriteButton camperId={camper.id} />
          </div>
        </div>
        
        <div className={styles.ratingLocation}>
          <div className={styles.rating}>
            <svg className={styles.starIcon}>
              <use href={`${spriteUrl}#icon-star-pressed`} />
            </svg>
            <span className={styles.ratingAndReviews}>
              {camper.rating} ({reviewsCount} {reviewsCount === 1 ? 'Review' : 'Reviews'})
            </span>
          </div>
          <div className={styles.locationContainer}>
            <svg className={styles.locationIcon}>
              <use href={`${spriteUrl}#icon-map`} />
            </svg>
            <span className={styles.location}>{camper.location}</span>
          </div>
        </div>

        {/* Опис */}
        <p className={styles.description}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        {/* Значки обладнання */}
        <div className={styles.equipment}>
          {/* Трансмісія */}
          <div className={styles.equipmentBadge}>
            <svg className={styles.icon}>
              <use href={`${spriteUrl}#${transmissionIconId}`} />
            </svg>
            <span>{transmissionLabel}</span>
          </div>

          {/* Інші фільтри */}
          {activeFeatures.map((feature) => (
            <div key={feature} className={styles.equipmentBadge}>
              <svg className={styles.icon}>
                <use href={`${spriteUrl}#${equipmentIcons[feature]}`} />
              </svg>
              <span>{feature}</span>
            </div>
          ))}

          {/* Паливо */}
          <div className={styles.equipmentBadge}>
            <svg className={styles.icon}>
              <use href={`${spriteUrl}#icon-tanker`} />
            </svg>
            <span>{engineType}</span>
          </div>
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
