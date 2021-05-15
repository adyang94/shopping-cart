import React from 'react';

function Checkout() {
  return (
    <div>
      <form>
        <input placeholder="Email" />
        <br />
        <input type="checkbox" />
        Add email for the latest updates and deals!

        <h3>Shipping Info</h3>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <br />

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

        <h3>Payment</h3>
        <br />
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

      </form>
    </div>
  );
}

export default Checkout;
