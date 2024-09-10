import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setBodyType, setFeatures } from '../store/slices/filtersSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const { location, bodyType, features } = useSelector((state) => state.filters);

  return (
    <div className="filters">
      <input
        type="text"
        value={location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
        placeholder="Location"
      />
      <select
        value={bodyType}
        onChange={(e) => dispatch(setBodyType(e.target.value))}
      >
        <option value="">Select Body Type</option>
        <option value="van">Van</option>
        <option value="motorhome">Motorhome</option>
      </select>
      <div>
        <label>
          <input
            type="checkbox"
            value="AC"
            onChange={(e) =>
              dispatch(setFeatures(e.target.checked ? [...features, e.target.value] : features.filter((f) => f !== e.target.value)))
            }
          />
          Air Conditioning
        </label>
        {/* Додати більше фільтрів */}
      </div>
    </div>
  );
};

export default Filters;
