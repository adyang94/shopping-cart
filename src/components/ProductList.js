import React from 'react';
// import PropTypes from 'prop-types';
import items from './products';

// import Items from './Items';

function ProductList() {
  const productList = (item) => (
    <div className="product">
      <h3>
        {item.name}
      </h3>
      <img className="productImg" alt={`${item.name}`} src={item.img} />
      <br />
      <div>
        {item.price}

      </div>
    </div>
  );
  return (
    <div className="productListPage">

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
