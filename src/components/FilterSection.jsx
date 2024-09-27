import React from 'react';
import spriteUrl from '../assets/icons/symbol-defs.svg?url';
import styles from './FilterSection.module.css';

const FilterSection = ({ selectedFilters, setSelectedFilters }) => {
  // Обробка зміни локації
  const handleLocationChange = (event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      location: event.target.value,
    }));
  };

  // Обробка зміни обладнання
  const handleEquipmentChange = (equipment) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      equipment: prevFilters.equipment.includes(equipment)
        ? prevFilters.equipment.filter((item) => item !== equipment)
        : [...prevFilters.equipment, equipment],
    }));
  };

  // Обробка зміни типу авто
  const handleVehicleTypeChange = (vehicleType) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      vehicleType,
    }));
  };

  // Визначення вибраного фільтру
  const isSelected = (equipment) => selectedFilters.equipment.includes(equipment);

  // Визначення вибраного типу авто
  const isVehicleTypeSelected = (type) => selectedFilters.vehicleType === type;

  return (
    <div className={styles.sidebar}>
      <div className={styles.locationContainer}>
        <p className={styles.locationLabel}>Location</p>
        <div className={styles.inputWrapper}>
          <svg className={styles.locationIcon}>
            <use href={`${spriteUrl}#icon-map`} />
          </svg>
          <input
            type="text"
            placeholder="City"
            value={selectedFilters.location}
            onChange={handleLocationChange}
            className={styles.locationInput}
          />
        </div>
      </div>

      <p className={styles.filterTitle}>Filters</p>

      <p className={styles.vehicleEquipmentTitle}>Vehicle Equipment</p>
      <div className={styles.divider}></div>

      <div className={styles.vehicleEquipment}>
        {['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'].map((equip) => (
          <div
            key={equip}
            className={`${styles.filterItem} ${isSelected(equip) ? styles.selected : ''}`}
            onClick={() => handleEquipmentChange(equip)}
          >
            <input type="checkbox" checked={isSelected(equip)} readOnly />
            <svg className={styles.icon}>
              <use href={`${spriteUrl}#icon-${equip.toLowerCase()}`} />
            </svg>
            <p>{equip}</p>
          </div>
        ))}
      </div>

      <p className={styles.vehicleTypeTitle}>Vehicle Type</p>
      <div className={styles.divider}></div>

      <div className={styles.vehicleTypeGroup}>
        {['van', 'fully-integrated', 'alcove'].map((type) => (
          <div
            key={type}
            className={`${styles.filterItem} ${isVehicleTypeSelected(type) ? styles.selected : ''}`}
            onClick={() => handleVehicleTypeChange(type)}
          >
            <input type="radio" name="vehicleType" checked={isVehicleTypeSelected(type)} readOnly />
            <svg className={styles.icon}>
              <use href={`${spriteUrl}#icon-${type.replace(' ', '-')}`} />
            </svg>
            <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
