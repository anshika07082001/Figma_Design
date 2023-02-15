import React, { useRef } from "react";
import BillingComp from "./BillingComp";
import BillingSummaryComp from "./BillingSummaryComp";
import OrderComp from "./OrderComp";
import PaymentComp from "./PaymentComp";
import ShippingComp from "./ShippingComp";

const Form = () => {
  var divRef = useRef<any>([]);

  // function collapses the div on button click
  const showdiv = (ind: number) => {
    if (divRef.current[ind].classList[0] == "hide") {
      divRef.current[ind].classList.remove("hide");
      divRef.current[ind].classList.add("block");
    } else {
      divRef.current[ind].classList.remove("block");
      divRef.current[ind].classList.add("hide");
    }
  };

  return (
    <div className="container">
      {/* header Section */}
      <section className="header">
        <div className="navbar row">
          <img src="Logo.png" alt="" />
          <div className="navbar__btn row">
            <span>Already have an account?</span>
            <button className="button">Sign In</button>
          </div>
        </div>
      </section>
      {/* body section */}
      <section className="body row">
        <div className="body__left column">
          <BillingComp />
          <ShippingComp />
          <PaymentComp />
        </div>
        <div className="body__right column">
          <OrderComp showdiv={showdiv} divRef={divRef} />
          <BillingSummaryComp showdiv={showdiv} divRef={divRef} />
        </div>
      </section>
    </div>
  );
};

export default Form;
