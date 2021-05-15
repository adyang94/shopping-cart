import React from 'react';

function Checkout() {
  return (
    <div className="checkoutCtn">
      <form>
        <input placeholder="Email" style={{ width: '75%' }} />
        <br />
        <div>
          <input type="checkbox" />
          Add email for the latest updates and deals!
        </div>

        <div className="shippingInfoCtn">
          <h3>Shipping Info</h3>
          <div>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <br />
          </div>

          <input placeholder="Company (optional)" />
          <br />
          <input placeholder="Address (include apartment number if needed" />
          <br />
          <input placeholder="City" />
          <br />
          <input placeholder="State" />
          <br />
          <input placeholder="Country" />
          <br />
          <input placeholder="Phone (optional)" />
          <br />
        </div>

        <div className="paymentCtn">
          <h3>Payment</h3>
          <input placeholder="Credit Card Number" />
          <br />
          <input placeholder="Expiration Date" />
          <input placeholder="CVC (3 digits on back of card)" />
          <br />
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <br />
          <input placeholder="Company (optional)" />
          <br />
          <input placeholder="Address (include apartment number if needed)" />
          <br />
          <input placeholder="City" />
          <br />
          <input placeholder="State" />
          <br />
          <input placeholder="Country" />
          <br />
          <input placeholder="Phone (optional)" />
          <br />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
