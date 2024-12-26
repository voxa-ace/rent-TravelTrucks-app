import React from "react";
import styles from './CampDetails.module.css';
import {firstLetterUpperCase} from '../helpers/firstLetterUpperCase'

const CampDetails = ({camperDetail}) => {
  return (
    <div className={styles.detailsFeatures}>
      <div className={styles.featuresList}>
        <div className={styles.featureItem}>Automatic</div>
        <div className={styles.featureItem}>AC</div>
        <div className={styles.featureItem}>Radio</div>
        <div className={styles.featureItem}>Petrol</div>
        <div className={styles.featureItem}>Kitchen</div>
      </div>

      <div className={styles.vehicleDetails}>
        <h3 className={styles.subHeading}>Vehicle details</h3>
        <ul className={styles.detailsList}>
          <li className={styles.detailItem}>
            <strong>Form:</strong> {firstLetterUpperCase(camperDetail.form)}
          </li>
          <li className={styles.detailItem}>
            <strong>Length:</strong> {camperDetail.length}
          </li>
          <li className={styles.detailItem}>
            <strong>Width:</strong> {camperDetail.width}
          </li>
          <li className={styles.detailItem}>
            <strong>Height:</strong> {camperDetail.height}
          </li>
          <li className={styles.detailItem}>
            <strong>Tank:</strong> {camperDetail.tank}
          </li>
          <li className={styles.detailItem}>
            <strong>Consumption:</strong> {camperDetail.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CampDetails;
