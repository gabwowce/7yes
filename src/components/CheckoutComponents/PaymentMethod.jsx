import React, { useState } from "react";
import OptionTemplate from "./OptionTemplate";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  const shippingOptions = [
    { label: "Credit Card", description: "Mastercard, Maestro, American Express, Visa are accepted", value: "card" },
    { label: "Cash on Delivery", description: "Pay with cash upon the delivery", value: "cash" },
  ];

  return (
    <div>
      {shippingOptions.map((option) => (
        <OptionTemplate
          key={option.value}
          label={option.label}
          description={option.description}
          price={option.price}
          name="payment"
          value={option.value}
          checked={selectedMethod === option.value}
          onChange={(e) => setSelectedMethod(e.target.value)}
        />
      ))}
    </div>
  );
};

export default PaymentMethod;
