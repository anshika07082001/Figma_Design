import React from "react";

const BillingComp = () => {
  return (
    <div className="billing shadow">
        <span className="fontWeight">Billing Address</span>
        <div className="billing__name">
            <div className="billing__firstName">
                <label className="label">First Name</label>
                <input value='Alex' className="input"/>
            </div>
            <div className="billing__firstName">
                <label className="label">Last Name</label>
                <input value='Driver' className="input"/>
            </div>
        </div>
        <div className="billing__name">
            <div className="billing__firstName billing--email">
                <label className="label">Email Address</label>
                <input value='username@gmail.com' className="input input--email"/>
            </div>
        </div>
        <div className="billing__name">
            <div className="billing__firstName billing--email">
                <label className="label">Street Address</label>
                <input className="input input--email"/>
            </div>
        </div>
        <div className="billing__name">
            <div className="billing__firstName billing--email">
                <input className="input input--email"/>
            </div>
        </div>
        <div className="billing__name">
            <div className="billing__firstName">
                <label className="label">State/Province</label>
                <select className="input input--select">
                    <option>California</option>
                </select>
                {/* <input value='Alex' className="input"/> */}
            </div>
            <div className="billing__firstName">
                <label className="label">City</label>
                <input value='San Diego' className="input"/>
            </div>
        </div>
        <div className="billing__name">
            <div className="billing__firstName">
                <label className="label">Zip/Postal code</label>
                <input value='22434' className="input"/>
            </div>
            <div className="billing__firstName">
                <label className="label">Phone</label>
                <input value='+123 456 789 111' className="input"/>
            </div>
        </div>
        <div className="checkbox">
            <input type='checkbox' checked/>
            <span>My billing and shipping address are the same</span>
        </div>
        <div className="checkbox">
            <input type='checkbox'/>
            <span>Create an account for later use</span>
        </div>
    </div>
  );
};

export default BillingComp;
