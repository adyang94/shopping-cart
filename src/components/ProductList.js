/* eslint-disable react/prop-types */

import React from 'react';
import items from './products';

function ProductList({ addToCart, numItems }) {
  const productList = (item) => (
    <div className="product">
      <h3 id="productItemName">
        {item.name}
      </h3>
      <img className="productImg" alt={`${item.name}`} src={item.img} />
      <br />
      <div id="productItemPrice">
        {item.price}

      </div>
      <div id="addToCartBtn">
        <button type="button" onClick={() => (addToCart(item.id))}>Add to Cart</button>
      </div>
    </div>
  );
  return (
    <div className="productListPage">

      <div className="cartIcon">
        {numItems}
      </div>

      <div className="productListCtn">
        <h3>
          Product&rsquo;s Carousal:
        </h3>

        {items.map((item) => productList(item))}
      </div>
    </div>
  );
}

export default ProductList;
