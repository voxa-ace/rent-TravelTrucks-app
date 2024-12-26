// src/pages/CamperDetailPage.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; // Використовуємо useParams для отримання id з URL
import { fetchCamperById } from "../store/slices/campersSlice"; // Імпортуємо fetchCamperById
import styles from "./CamperDetailPage.module.css";
import SVG from "react-inlinesvg";
import Tabs from "../components/Tabs";
import BookingForm from "../components/BookingForm";
import CampDetails from "../components/CampDetails";
import Reviews from "../components/Reviews";

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
  if (!camperDetail) {
    return null
  }

  const tabs = [
    { label: "Features", content: <CampDetails camperDetail={camperDetail}/> },
    { label: "Reviews", content: <Reviews reviews={camperDetail.reviews}/> },
  ];

  return (
    <div className={styles.detailPageContainer}>
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
          <div className={styles.description}>{camperDetail.description}</div>

          <div className={styles.footerDetails}>
            <Tabs tabs={tabs} />
            <BookingForm />
    </div>
          {/* <div className={styles.camperDetailBottom}>
            <div className={styles.vehicleDetails}>
              <h3>Vehicle details</h3>
              <div className={styles.vehicleInfo}>
                <div>
                  <p>Form</p>
                  <p>{camperDetail.form}</p>
                </div>
                <div>
                  <p>Length</p>
                  <p>{camperDetail.length} m</p>
                </div>
                <div>
                  <p>Width</p>
                  <p>{camperDetail.width} m</p>
                </div>
                <div>
                  <p>Height</p>
                  <p>{camperDetail.height} m</p>
                </div>
                <div>
                  <p>Tank</p>
                  <p>{camperDetail.tank} L</p>
                </div>
                <div>
                  <p>Consumption</p>
                  <p>{camperDetail.consumption} L/100km</p>
                </div>
              </div>
            </div> */}

            {/* <div className={styles.bookingForm}>
              <h3>Book your campervan now</h3>
              <form>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="date">Booking date*</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="comment">Comment</label>
                <textarea id="comment" name="comment" />

                <button type="submit" className={styles.submitButton}>Send</button>
              </form>
            </div> */}
          {/* </div> */}
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default CamperDetailPage;
