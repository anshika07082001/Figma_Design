import React from "react";

type billingProps = {
  showdiv: (num: number) => void;
  divRef: React.MutableRefObject<any>;
};

const BillingSummaryComp = (props: billingProps) => {
  return (
    <div className="billing shadow billing--summary">
      <div
        className="collapse__arrow row collapsible"
        id="3"
        onClick={() => props.showdiv(2)}
      >
        <label className="fontWeight">Billing Summary</label>
        <i className="fa fa-caret-up"></i>
      </div>
      <div className="hide" ref={(ref) => (props.divRef.current[2] = ref)}>
        <div className="column">
          <div className="summary row">
            <label className="">Subtotal</label>
            <label className="">$3720,27</label>
          </div>
          <div className="summary row">
            <label className="">Discount</label>
            <label className="">-$749.99</label>
          </div>
          <div className="summary row">
            <label className="">
              Warranty (Platinum)
              <br />
              <span className="fontSize" style={{ color: "rgb(65 136 243)" }}>
                Remove
              </span>
            </label>
            <label className="">$259.99</label>
          </div>
          <div className="summary row">
            <label className="">Shipping</label>
            <label className="">$0.00</label>
          </div>
          <div className="summary row">
            <label className="">Tax</label>
            <label className="">$228.27</label>
          </div>
          <hr />
          <div className="summary row">
            <label className="fontWeight">Grand Total</label>
            <label className="fontWeight">$3,439.00</label>
          </div>
          <div className="billing__name order--inp">
            <div className="billing__firstName text--input">
              <label className="label">First Name</label>
              <textarea value="Type Here..." className="input text--input" />
            </div>
          </div>
          <div className="checkbox row">
            <input type="checkbox" checked />
            <span>
              Please check to acknowledge our{" "}
              <label style={{ color: "rgb(65 136 243)" }}>
                Privacy & Terms Policy
              </label>
            </span>
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
