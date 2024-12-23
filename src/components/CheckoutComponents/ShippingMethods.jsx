import React, { useState } from "react";
import OptionTemplate from "./OptionTemplate";

const ShippingMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("express"); 

  const shippingOptions = [
    { label: "Standard Delivery", description: "Delivery in 5-8 working days", price: "$8.00", value: "standard" },
    { label: "Express Shipping", description: "Delivery in 3-5 working days", price: "$15.00", value: "express" },
    { label: "Local Pickup", description: "Delivery in 1-2 working days", price: "Free", value: "free" },
  ];

  return (
    <div>
      {shippingOptions.map((option) => (
        <OptionTemplate
          key={option.value}
          label={option.label}
          description={option.description}
          price={option.price}
          name="shipping"
          value={option.value}
          checked={selectedMethod === option.value}
          onChange={(e) => setSelectedMethod(e.target.value)}
        />
      ))}
    </div>
  );
};

export default ShippingMethod;
