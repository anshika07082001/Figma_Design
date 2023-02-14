import React from "react";

const OrderComp = () => {
  return (
    <>
    <div className="shadow billing order">
      <div className="collapse__arrow">
        <label className="fontWeight">Order Review</label>
        <i className="fa fa-caret-down"></i>
      </div>
      <label className="fontSize">3 items in Card</label>
    </div>
    <div className="shadow billing order order--margin">
      <div className="collapse__arrow ">
        <label className="fontWeight">Discount Codes</label>
        <i className="fa fa-caret-down"></i>
      </div>
    </div>

    </>
  );
};

export default OrderComp;
