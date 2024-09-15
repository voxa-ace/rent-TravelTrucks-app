import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../store/slices/campersSlice';
import FilterSection from '../components/FilterSection';
import CamperCard from '../components/CamperCard';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campersList, status, error } = useSelector((state) => state.campers);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    equipment: [],
    vehicleType: '',
  });

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const filteredCampers = campersList?.items?.filter((camper) => {
    const matchesLocation = selectedFilters.location
      ? camper.location.toLowerCase().includes(selectedFilters.location.toLowerCase())
      : true;
    const matchesEquipment = selectedFilters.equipment.every((equip) =>
      camper.equipment.includes(equip)
    );
    const matchesVehicleType = selectedFilters.vehicleType
      ? camper.bodyType === selectedFilters.vehicleType
      : true;
    return matchesLocation && matchesEquipment && matchesVehicleType;
  }) || [];

  return (
    <div className={styles.container}>
      <FilterSection
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className={styles.campersList}>
        {status === 'loading' && <p>Loading campers...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {filteredCampers.length > 0 ? (
          <>
            {filteredCampers.slice(0, visibleCount).map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
            {filteredCampers.length > visibleCount && (
              <button onClick={handleLoadMore} className={styles.loadMoreButton}>
                Load More
              </button>
            )}
          </>
        ) : (
          status !== 'loading' && <p>No campers found</p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
