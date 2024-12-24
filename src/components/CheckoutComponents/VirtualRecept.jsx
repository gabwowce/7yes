import React from "react";
import Button from "../UI/Button";

const VirtualRecept = ({ subtotal, taxes, shippingCost }) => {
  const total = subtotal + taxes + shippingCost;

  return (
    <div className="virtual-recept">
       <div className="coupon-input">
            <input
            type="text"
            value=""
            placeholder="YOUR COUPON CODE"/>
            <Button content="Apply coupon" className="gray-button" />
        </div>
      
      <div className="cost-items">
        <div className="cost-item">
          <span className="label">Subtotal:</span>
          <span className="value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="cost-item">
          <span className="label">Taxes:</span>
          <span className="value">${taxes.toFixed(2)}</span>
        </div>
        <div className="cost-item">
          <span className="label">Shipping Cost:</span>
          <span className="value">${shippingCost.toFixed(2)}</span>
        </div>
      </div>
      <div className="total">
        <h3 className="total-label font-semibold">Total:</h3>
        <h3 className="total-value font-semibold">${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default VirtualRecept;
