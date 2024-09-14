import React from 'react';
import styles from './FilterSection.module.css';

const FilterSection = ({ selectedFilters, setSelectedFilters }) => {
  const handleLocationChange = (event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      location: event.target.value,
    }));
  };

  const handleEquipmentChange = (equipment) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      equipment: prevFilters.equipment.includes(equipment)
        ? prevFilters.equipment.filter((item) => item !== equipment)
        : [...prevFilters.equipment, equipment],
    }));
  };

  const handleVehicleTypeChange = (event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      vehicleType: event.target.value,
    }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.locationContainer}>
        <p className={styles.locationLabel}>Location</p>
        <input
          type="text"
          placeholder="Enter location"
          value={selectedFilters.location}
          onChange={handleLocationChange}
          className={styles.locationInput}
        />
      </div>

      <p className={styles.filterTitle}>Filters</p>

      <div className={styles.vehicleEquipment}>
        {['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'].map((equip) => (
          <div
            key={equip}
            className={`${styles.filterItem} ${
              selectedFilters.equipment.includes(equip) ? styles.selected : ''
            }`}
            onClick={() => handleEquipmentChange(equip)}
          >
            <input
              type="checkbox"
              checked={selectedFilters.equipment.includes(equip)}
              onChange={() => handleEquipmentChange(equip)}
            />
            <p>{equip}</p>
          </div>
        ))}
      </div>

      <div className={styles.vehicleType}>
        <p className={styles.vehicleTypeTitle}>Vehicle Type</p>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="van"
            checked={selectedFilters.vehicleType === 'van'}
            onChange={handleVehicleTypeChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="fully-integrated"
            checked={selectedFilters.vehicleType === 'fully-integrated'}
            onChange={handleVehicleTypeChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={selectedFilters.vehicleType === 'alcove'}
            onChange={handleVehicleTypeChange}
          />
          Alcove
        </label>
      </div>
    </div>
  );
};

export default FilterSection;
