import React from 'react';
// import PropTypes from 'prop-types';
import items from './products';

// import Items from './Items';

function ProductList() {
  const productListt = () => (
    <div>
      product listt
    </div>
  );
  return (
    <div className="productListPage">
      <p>
        Product Listt
      </p>
      <div className="productListCtn">
        {items[0].name}
        <br />
        {items[0].description}
        <br />
        {items[0].price}

        {items.map(() => productListt)}
      </div>
    </div>
  );
}

export default ProductList;
