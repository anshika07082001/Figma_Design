import React from "react";

const ShippingComp = () => {
  return (
    <div className="billing billing--shipping shadow">
      <span className="fontWeight">Shipping Method</span>
      <div className="radio row">
        <input type="radio" checked />
        <label>$2.99</label>
        <label>USPS 1st Class With Tracking (5-13 days) COVID19 Delay</label>
        <img src="image 36.png" alt="" />
      </div>
      <div className="radio row radio--white">
        <input type="radio" />
        <label>$9.00</label>
        <label>USPS Tracking With Priority (5-10 days) COVID19 Delay</label>
        <img src="image 36.png" alt="" />
      </div>
    </div>
  );
};

export default ShippingComp;
