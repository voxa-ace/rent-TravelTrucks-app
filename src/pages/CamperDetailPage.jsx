// src/pages/CamperDetailPage.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; // Використовуємо useParams для отримання id з URL
import { fetchCamperById } from "../store/slices/campersSlice"; // Імпортуємо fetchCamperById
import styles from "./CamperDetailPage.module.css";
import SVG from "react-inlinesvg";

const CamperDetailPage = () => {
  const { id } = useParams(); // Отримуємо id з URL
  const dispatch = useDispatch();
  const { camperDetail, status, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id)); // Викликаємо екшен для завантаження camper за id
  }, [dispatch, id]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {camperDetail ? (
        <div>
          <div className={styles.headerContainer}>
            <h2 className={styles.camperTitle}>{camperDetail.name}</h2>
          </div>
          <div className={styles.ratingLocation}>
            <div className={styles.rating}>
              <SVG
                src="../../public/assets/icons/star_pressed.svg"
                width={16}
                height="100%"
                title="Rating"
              />
              <span className={styles.ratingAndReviews}>
                {camperDetail.rating} ({camperDetail.reviews.length}{" "}
                {camperDetail.reviews.length === 1 ? "Review" : "Reviews"})
              </span>
            </div>
            <div className={styles.locationContainer}>
              <SVG
                src="../../public/assets/icons/map.svg"
                width={16}
                height="100%"
                title="Location"
              />
              <span className={styles.location}>{camperDetail.location}</span>
            </div>
          </div>
          {/* Контейнер для ціни та лайка */}
          <div className={styles.priceLikeContainer}>
            <span className={styles.price}>€{camperDetail.price},00</span>
          </div>
          {/* Фото кемпера */}
          <div className={styles.images}>
            {camperDetail.gallery.map((image) => (
              <div key={image.original} className={styles.imageContainer}>
                <img
                  src={image.original}
                  alt={camperDetail.name}
                  className={styles.camperImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.description}>
            {camperDetail.description}
          </div>
          <div className={styles.camperDetailBottom}>
            
          </div>
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default CamperDetailPage;
