import React from "react";

const BillingSummaryComp = () => {
  const showDiv = () => {
   
  };

  return (
    <div className="billing shadow billing--summary">
      <div className="collapse__arrow collapsible" onClick={showDiv}>
        <label className="fontWeight">Billing Summary</label>
        <i className="fa fa-caret-up"></i>
      </div>
      <div className="show__content">
        <div className="summary">
          <div className="summary__row">
            <label className="">Subtotal</label>
            <label className="">$3720,27</label>
          </div>
          <div className="summary__row">
            <label className="">Discount</label>
            <label className="">-$749.99</label>
          </div>
          <div className="summary__row">
            <label className="">
              Warranty (Platinum)
              <br />
              <span className="fontSize" style={{ color: "rgb(65 136 243)" }}>
                Remove
              </span>
            </label>
            <label className="">$259.99</label>
          </div>
          <div className="summary__row">
            <label className="">Shipping</label>
            <label className="">$0.00</label>
          </div>
          <div className="summary__row">
            <label className="">Tax</label>
            <label className="">$228.27</label>
          </div>
          <hr />
          <div className="summary__row">
            <label className="fontWeight">Grand Total</label>
            <label className="fontWeight">$3,439.00</label>
          </div>
          <div className="billing__name order--inp">
            <div className="billing__firstName">
              <label className="label">First Name</label>
              <input
                value="Type Here..."
                className="input"
                style={{
                  padding: "25px",
                  margin: "0px",
                  paddingRight: "170px",
                }}
              />
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" checked />
            <label>
              Please check to acknowledge our{" "}
              <span style={{ color: "rgb(65 136 243)" }}>
                Privacy & Terms Policy
              </span>
            </label>
          </div>
          <button className="button button--filled fontWeight">
            Pay $3,439.00
          </button>
          <img
            src="Norton Icon.png"
            alt=""
            style={{
              height: "40px",
              width: "80px",
              margin: "auto",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingSummaryComp;
