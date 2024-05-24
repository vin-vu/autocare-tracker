'use client';

import { useState } from 'react';
import styles from './CarForm.module.css';

export default function CarForm() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    'License Plate': '',
    vin: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
  };

  return (
      <form className={styles.FormContainer}>
        {Object.keys(formData).map((key) => (
          <div className={styles.FormElement} key={key}>
            <label className={styles.FormLabel}>{key[0].toLocaleUpperCase() + key.slice(1)}</label>
            <input
              className={styles.FormInput}
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={' Enter ' + key}
            />
          </div>
        ))}
      </form>
  );
}
