import React from "react";
import styles from "./CampDetails.module.css";
import { firstLetterUpperCase } from "../helpers/firstLetterUpperCase";
import SVG from "react-inlinesvg";

const properties = [
  "tv",
  "ac",
  "kitchen",
  "bathroom",
  "engine",
  "gas",
  "microwave",
  "water",
  "radio",
  "refrigerator",
];
const CampDetails = ({ camperDetail }) => {
  return (
    <div className={styles.detailsFeatures}>
      <div className={styles.featuresList}>
        {properties.map(
          (item) =>
            (camperDetail[item] || camperDetail[item.toLocaleUpperCase()]) && (
              <li key={item} className={styles.featureItem}>
                <SVG
                  src={`../../public/assets/icons/${item}.svg`}
                  width={16}
                  height="100%"
                  title={item}
                />
                {firstLetterUpperCase(
                  item === "engine" ? camperDetail[item] : item
                )}
              </li>
            )
        )}
      </div>

      <div className={styles.vehicleDetails}>
        <h3 className={styles.subHeading}>Vehicle details</h3>
        <ul className={styles.detailsList}>
          <li className={styles.detailItem}>
            <p>Form:</p> {firstLetterUpperCase(camperDetail.form)}
          </li>
          <li className={styles.detailItem}>
            <p>Length:</p> {camperDetail.length}
          </li>
          <li className={styles.detailItem}>
            <p>Width:</p> {camperDetail.width}
          </li>
          <li className={styles.detailItem}>
            <p>Height:</p> {camperDetail.height}
          </li>
          <li className={styles.detailItem}>
            <p>Tank:</p> {camperDetail.tank}
          </li>
          <li className={styles.detailItem}>
            <p>Consumption:</p> {camperDetail.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CampDetails;
