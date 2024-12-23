import React, { useState } from "react";
import InputField from "../UI/InputField"; 
import Checkbox from "../UI/CheckBox";
import SelectField from '../UI/SelectField.jsx';

const DetailsForm = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    zipCode: "",
    address: "",
    orderNotes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const countries = [
    { value: 'lt', label: 'Lithuania' },
    { value: 'lv', label: 'Latvia' },
    { value: 'ee', label: 'Estonia' },
    { value: 'pl', label: 'Poland' },
  ];

  const cities = [
    { value: "vilnius", label: "Vilnius" },
    { value: "kaunas", label: "Kaunas" },
    { value: "klaipeda", label: "Klaipėda" },
    { value: "siauliai", label: "Šiauliai" },
    { value: "panevezys", label: "Panevėžys" },
  ];

  return (
    <form>
      <fieldset>
        <div className="two-in-on-row">
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required={true}
            placeholder="Your first name"
            fullWidth={false} 
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required={true}
            placeholder="Your last name"
            fullWidth={false} 
          />
        </div>

        <div className="two-in-on-row">
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required={true}
            placeholder="Email address"
            fullWidth={false} 
          />
       
          <InputField
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required={true}
            placeholder="+1 __ __ __"
            fullWidth={false}
          />
        </div>

        <div>
          <SelectField
            label="Country"
            placeholder="Select a country"
            options={countries}
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            fullWidth={true}
          />
        </div>

        <div className="two-in-on-row">
          <SelectField
            label="City"
            name="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            placeholder="Select a city"
            fullWidth={false}
            options={cities}
          />
          <InputField
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required={true}
            placeholder="XXX-XXXX"
            fullWidth={false}
          />
        </div>

        {/* Address */}
        <div>
          <InputField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required={true}
            placeholder=""
            fullWidth={true}
          />
        </div>

        {/* Order Notes */}
        <div className="order-notes">
          <label htmlFor="orderNotes">
            Order Notes <span>(optional)</span>
          </label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            rows="4"
            value={formData.orderNotes}
            onChange={handleChange}
            style={{ backgroundColor: 'var(--background-color)' }}
            className="text-area"
            placeholder=""
          />
        </div>

        <Checkbox label="Billing addres same as delivery"/>

      </fieldset>
    </form>
  );
};

export default DetailsForm;
