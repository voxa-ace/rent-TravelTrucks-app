import React from 'react';
import { Link } from 'react-router-dom';

const CamperCard = ({ camper }) => {
  return (
    <div className="camper-card">
      <img src={camper.image} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>{camper.description}</p>
      <Link to={`/catalog/${camper.id}`}>View Details</Link>
    </div>
  );
};

export default CamperCard;
