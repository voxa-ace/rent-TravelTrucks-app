import React, { useState } from "react";
import styles from './BookingForm.module.css';
import toast from 'react-hot-toast';
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });


  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Successfully!');
    };

  return (
    <div className={styles.bookingForm}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            id="date"
            type="text"
            name="date"
            placeholder="Booking date*"
            required
            value={formData.date}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            className={styles.textarea}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>Send</button>
          </div>
        </form>       
    </div>
  );
};

export default BookingForm;
