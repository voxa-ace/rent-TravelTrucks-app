import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ camperId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dates, setDates] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}/bookings`, {
        name,
        email,
        dates,
      });
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking camper:', error);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <input
        type="text"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        placeholder="Booking dates"
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
