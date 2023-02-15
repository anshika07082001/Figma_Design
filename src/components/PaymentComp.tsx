import React from "react";

const PaymentComp = () => {
  return (
    <div className="billing shadow billing--payment">
      <span className="fontWeight">Payment Method</span>
      <div className="radio row radio--white radio--gap">
        <input type="radio" />
        <label className="fontWeight">PayPal</label>
        <label>
          You will be redirected to the PayPal website after submitting your
          code
        </label>
        <img
          style={{ height: "60px" }}
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paypal-color-icon.png"
          alt=""
        />
      </div>
      <div className="credit">
        <div className="radio row radio--credit">
          <input type="radio" checked />
          <label>Pay with Credit Card</label>
          <span className="img__cards">
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              style={{
                height: "30px",
                width: "45px",
                background: "white",
                border: "1px solid grey",
              }}
              alt=""
            />
            <img
              src="https://icon-library.com/images/discover-icon/discover-icon-10.jpg"
              style={{
                height: "30px",
                width: "45px",
                background: "white",
                border: "1px solid grey",
              }}
              alt=""
            />
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              style={{
                height: "30px",
                width: "45px",
                background: "white",
                border: "1px solid grey",
              }}
              alt=""
            />
            <img
              src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mcbc_dla_maestro-vrt-rev_60px.png"
              style={{
                height: "30px",
                width: "45px",
                background: "white",
                border: "1px solid grey",
              }}
              alt=""
            />
          </span>
        </div>
        <div className="billing__name row" style={{ gap: "10px" }}>
          <div className="billing__firstName">
            <label className="label light__bg">Card number</label>
            <input value="1234 5678 1258 4857" className="input light__bg" />
          </div>
          <div className="billing__firstName">
            <label className="label light__bg">Expiration Date</label>
            <input value="MM/YY" className="input light__bg" />
          </div>
        </div>
        <div
          className="billing__name row payment--label"
          style={{ gap: "10px" }}
        >
          <div className="billing__firstName">
            <label className="label light__bg">Card Security Card</label>
            <input value="***" className="input light__bg" />
          </div>
          <div className="billing__firstName">
            <p style={{ color: "blue" }}>What is this?</p>
          </div>
        </div>
      </div>
      <div className="lock__icon row">
        <div
          style={{
            padding: "5px",
            border: "1px solid blue",
            borderRadius: "30px",
            width: "20px",
            color: "blue",
            textAlign: "center",
          }}
        >
          <i className="fa fa-lock"></i>
        </div>
        <label className="fontSize">
          We Protect your payment information using encryption to provide
          bank-level security.
        </label>
      </div>
    </div>
  );
};

export default PaymentComp;
