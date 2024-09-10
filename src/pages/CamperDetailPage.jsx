// src/pages/CamperDetailPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';  // Використовуємо useParams для отримання id з URL
import { fetchCamperById } from '../store/slices/campersSlice';  // Імпортуємо fetchCamperById

const CamperDetailPage = () => {
  const { id } = useParams();  // Отримуємо id з URL
  const dispatch = useDispatch();
  const { camperDetail, status, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id));  // Викликаємо екшен для завантаження camper за id
  }, [dispatch, id]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {camperDetail ? (
        <div>
          <h2>{camperDetail.name}</h2>
          <p>{camperDetail.description}</p>
          <p>Price per day: ${camperDetail.price}</p>
          {/* Тут ти можеш додати більше полів за потреби */}
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default CamperDetailPage;
