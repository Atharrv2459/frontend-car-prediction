import React, { useState } from "react";
import "./index.css";

export default function CarPricePredictionForm() {
  const [formData, setFormData] = useState({
    year: "",
    price: "",
    kmsDriven: "",
    owners: "",
    fuelType: "",
    sellerType: "",
    transmissionType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("This is a design-only form. Prediction backend is not connected.");
  };

  return (
    <div className="container">
      <div className="title-section">
        <h1>Car Price Prediction</h1>
        <p>Predict your old car price according to your car features.</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <h2>Enter your car details here</h2>

        <label>Price at which it was bought</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <label>Age of the car</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>How Many Kilometers Driven?</label>
        <input
          type="number"
          name="kmsDriven"
          value={formData.kmsDriven}
          onChange={handleChange}
          required
        />

        <label>Ownership of car</label>
        <input
          type="number"
          name="owners"
          value={formData.owners}
          onChange={handleChange}
          required
        />

        <label>Fuel Type</label>
        <select
          name="fuelType"
          value={formData.fuelType}
          onChange={handleChange}
          required
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
          <option value="Electric">Electric</option>
        </select>

        <label>Seller Type</label>
        <select
          name="sellerType"
          value={formData.sellerType}
          onChange={handleChange}
          required
        >
          <option value="">Select Seller Type</option>
          <option value="Dealer">Dealer</option>
          <option value="Individual">Individual</option>
        </select>

        <label>Transmission Type</label>
        <select
          name="transmissionType"
          value={formData.transmissionType}
          onChange={handleChange}
          required
        >
          <option value="">Select Transmission Type</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        <button type="submit">Predict Price</button>
      </form>
    </div>
  );
}
