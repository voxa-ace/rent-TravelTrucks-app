import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../store/slices/campersSlice";
import FilterSection from "../components/FilterSection";
import CamperCard from "../components/CamperCard";
import LoadMoreButton from "../components/LoadMoreButton";
import styles from "./CatalogPage.module.css";

const vehicleTypes = {
  van: "panelTruck",
  "fully-integrated": "fullyIntegrated",
  alcove: "alcove",
};
const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campersList, status, error } = useSelector((state) => state.campers);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    equipment: [],
    vehicleType: "",
  });

useEffect(() => {
  const apiFilters = {
    location: selectedFilters.location || undefined,
    transmission: selectedFilters.equipment.includes("Automatic") ? "automatic" : undefined,
    form: vehicleTypes[selectedFilters.vehicleType] || undefined,
    limit: visibleCount,
  };

  dispatch(fetchCampers(apiFilters));
}, [dispatch, selectedFilters, visibleCount]);


  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  const filteredCampers =
    campersList?.items?.filter((camper) => {
      const matchesLocation = selectedFilters.location
        ? camper.location
            .toLowerCase()
            .includes(selectedFilters.location.toLowerCase())
        : true;
      const matchesEquipment = selectedFilters.equipment.every((equip) => {
        const updateEquip = equip.toLowerCase();
        if (updateEquip === "automatic") {
          return camper.transmission === updateEquip;
        }

        return camper[equip] || camper[updateEquip];
      });
      const matchesVehicleType = selectedFilters.vehicleType
        ? camper.form === vehicleTypes[selectedFilters.vehicleType]
        : true;
      return matchesEquipment && matchesLocation && matchesVehicleType;
    }) || [];
  return (
    <div className={styles.container}>
      <FilterSection
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className={styles.campersList}>
        {status === "loading" && <p>Loading campers...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {filteredCampers.length > 0 ? (
          <>
            {filteredCampers.slice(0, visibleCount).map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
            {filteredCampers.length > visibleCount && (
              <LoadMoreButton onClick={handleLoadMore} />
            )}
          </>
        ) : (
          status !== "loading" && <p>No campers found</p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
