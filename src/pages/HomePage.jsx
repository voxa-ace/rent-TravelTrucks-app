import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css'; // Importing CSS module

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <button onClick={() => navigate('/catalog')}>View Now</button>
      </div>
    </div>
  );
};

export default HomePage;
