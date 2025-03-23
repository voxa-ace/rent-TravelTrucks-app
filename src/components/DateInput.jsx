import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateInput.module.css";

const DateInput = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="MMMM d, yyyy"
      placeholderText="Booking date*"
      className={styles.input}
      required
    />
  );
};

export default DateInput;
