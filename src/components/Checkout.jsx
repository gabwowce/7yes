import React from "react";
import DetailsForm from "./CheckoutComponents/DetailsForm";
import ShippingMethods from "./CheckoutComponents/ShippingMethods"; 
import PaymentMethod from "./CheckoutComponents/PaymentMethod";
import Checkbox from "./UI/CheckBox";
import Button from "./UI/Button";
import OrderSummary from "./CheckoutComponents/OrderSummary";

import item1 from '../assets/7yes-item-1.png';
import item2 from '../assets/7yes-item-2.png';
import item3 from '../assets/7yes-item-3.png';

const Checkout = () => {

  const items = [
    { id: 1, title: "Candle in concrete bowl", priceAfterDiscount: "$5.50", specifications: { Color: "Gray night", Weight:"140g" },
       price:'$7.50', itemCount: 2, imageUrl: item1},
    { id: 2, title: "Exquisite glass vase", specifications: { },
       price:'$23.00', itemCount: 1, imageUrl: item2},
    { id: 3, title: "Set for a dinner party of 7 items", specifications: { },
       price:'$47.00', itemCount: 1, imageUrl: item3},

  ];

  return (
    <main className="container checkout">
      <section aria-labelledby="form-section">
        <h2 id="form-section">Checkout</h2>
        <fieldset>
          <legend>
            1. <span>SHIPPING DETAILS</span>
          </legend>
          <DetailsForm />
        </fieldset>
        <fieldset>
          <legend>
            2. <span>SHIPPING METHOD</span>
          </legend>
          <ShippingMethods />
        </fieldset>
        <fieldset>
          <legend>
            3. <span>PAYMENT METHOD</span>
          </legend>
          <PaymentMethod />
        </fieldset>

        <Checkbox
          className="privacity-policy"
          checked={true}
          label={
            <>
              Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the <a href="#">privacy policy</a>
            </>
          }
        />
        <Button content="Place an order" />
      </section>

      <OrderSummary initialItems={items} />
    </main>
  );
};

export default Checkout;
