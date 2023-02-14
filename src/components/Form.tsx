import React from "react";
import BillingComp from "./BillingComp";
import BillingSummaryComp from "./BillingSummaryComp";
import OrderComp from "./OrderComp";
import PaymentComp from "./PaymentComp";
import ShippingComp from "./ShippingComp";

const Form = () => {
  return (
    <div className="container">
      <section className="header">
        <div className="navbar">
          <img src="Logo.png" alt="" />
          <div className="navbar__btn">
            <span>Already have an account?</span>
            <button className="button">Sign In</button>
          </div>
        </div>
      </section>
      <section className="body">
        <div className="body__left">
          <BillingComp />
          <ShippingComp />
          <PaymentComp />
        </div>
        <div className="body__right">
          <OrderComp />
          <BillingSummaryComp/>
        </div>
      </section>
    </div>
  );
};

export default Form;
