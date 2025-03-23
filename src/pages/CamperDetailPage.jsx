import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../store/slices/campersSlice";
import styles from "./CamperDetailPage.module.css";
import SVG from "react-inlinesvg";
import Tabs from "../components/Tabs";
import BookingForm from "../components/BookingForm";
import CampDetails from "../components/CampDetails";
import Reviews from "../components/Reviews";
import { useState } from "react";
import TabButtons from "../components/TabButtons";

const CamperDetailPage = () => {
  const { id } = useParams(); // Отримуємо id з URL
  const dispatch = useDispatch();
  const { camperDetail, status, error } = useSelector((state) => state.campers);

  const reviewsSectionRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const [shouldScrollToReviews, setShouldScrollToReviews] = useState(false);

  useEffect(() => {
    dispatch(fetchCamperById(id)); // Викликаємо екшен для завантаження camper за id
  }, [dispatch, id]);

  useEffect(() => {
    if (reviewsSectionRef.current) {
      reviewsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [shouldScrollToReviews]);

  const handleReviewsClick = (e) => {
    e.preventDefault();
    setActiveTab(1);
    setShouldScrollToReviews(true);
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>404 - Camper not found</h2>
        <p>The camper you're looking for does not exist.</p>
      </div>
    );
  }
  
  if (!camperDetail) {
    return null;
  }

  const tabs = [
    { label: "Features", content: <CampDetails camperDetail={camperDetail} /> },
    {
      label: "Reviews",
      content: (
        <Reviews
          reviewsSectionRef={reviewsSectionRef}
          reviews={camperDetail.reviews}
        />
      ),
    },
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
                className={styles.starIcon}
                src="../../public/assets/icons/star_pressed.svg"
                width={16}
                height="100%"
                title="Rating"
              />
              <a
                href="#reviews"
                onClick={(e) => handleReviewsClick(e)}
                className={styles.ratingAndReviews}
              >
                {camperDetail.rating} ({camperDetail.reviews.length}{" "}
                {camperDetail.reviews.length === 1 ? "Review" : "Reviews"})
              </a>
            </div>
            <div className={styles.locationContainer}>
              <SVG
                className={styles.starIcon}
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
          <TabButtons
            activeTab={activeTab}
            onClick={setActiveTab}
            tabs={tabs}
          />

          <div className={styles.footerDetails}>
            <Tabs tabs={tabs} activeTab={activeTab} />
            <BookingForm />
          </div>
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default CamperDetailPage;
