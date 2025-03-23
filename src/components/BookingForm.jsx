import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import toast from "react-hot-toast";
import DateInput from "./DateInput"; // використання окремого компонента

const defaultFormState = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const BookingForm = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully!");
    setFormData(defaultFormState);
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

        <DateInput
          selectedDate={formData.date}
          onChange={(date) =>
            setFormData((prev) => ({ ...prev, date }))
          }
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
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
