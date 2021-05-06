import React from 'react';
// import PropTypes from 'prop-types';
import items from './products';

// import Items from './Items';

function ProductList() {
  const productListt = (item) => (
    <div>
      Product List
      <br />
      {item.name}
      <br />
      {item.description}
      <br />
      {item.price}
      <br />
      <img alt={`${item.name}`} src={item.img} />
    </div>
  );
  return (
    <div className="productListPage">

      <div className="productListCtn">
        <img src="../assets/Sabonis.jpg" alt="Sabonis" />
        {items.map((item) => productListt(item))}
      </div>
    </div>
  );
}

export default ProductList;
