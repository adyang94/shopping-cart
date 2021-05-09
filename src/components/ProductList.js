import React from 'react';
// import PropTypes from 'prop-types';
import items from './products';

// import Items from './Items';

function ProductList() {
  const productList = (item) => (
    <div className="product">
      Product List
      <br />
      {item.name}
      <br />
      {item.description}
      <br />
      {item.price}
      <br />
      <img className="productImg" alt={`${item.name}`} src={item.img} />
    </div>
  );
  return (
    <div className="productListPage">

      <div className="productListCtn">
        {items.map((item) => productList(item))}
      </div>
    </div>
  );
}

export default ProductList;
