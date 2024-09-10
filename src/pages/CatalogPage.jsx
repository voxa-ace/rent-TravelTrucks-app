import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../store/slices/campersSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campersList, status, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="campers-list">
      {status === 'loading' && <p>Завантаження кемперів...</p>}
      {status === 'failed' && <p>Помилка: {error}</p>}
      {campersList && campersList.items && campersList.items.length > 0 ? (
        <ul>
          {campersList.items.map((camper) => (
            <li key={camper.id}>
              <h2>{camper.name}</h2>
              <p>Ціна: €{camper.price}</p>
              {/* Інші деталі кемпера */}
              <img src={camper.gallery[0].thumb} alt={camper.name} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Кемперів не знайдено</p>
      )}
    </div>
  );
};

export default CatalogPage;