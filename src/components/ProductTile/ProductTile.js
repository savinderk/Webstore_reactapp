import React from 'react';
import Rating from '../Rating/Rating'
import AvailableColorAndSize from '../AvailableColorAndSize/AvailableColorAndSize';

import './ProductTile.css';


function ProductTile({productData,index}) {
  return (
    <div className="product-tile">
          <div>
            <img className="product-image" src={productData.image_link} alt={productData.image_alt}/>
            <h3>{productData.prod_name}</h3>
            <data value="350"><del>{productData.original_price}</del> <ins>{productData.sale_price}</ins></data>
            <p>{productData.prod_description}</p>
            <dl>
              <dt>Rating</dt>
              <dd> <span className="product-rating">{productData.prod_rating}</span> <Rating rating={productData.prod_rating} /></dd>
            </dl>
            <a href="#">See More</a>
          </div>
          <AvailableColorAndSize key={"color"+index} colorList={productData.available_color} 
              sizeList={productData.available_size}
          />
          <div className="tile-footer">
            <button type="button" className="cart-button">
              <img src="./images/clipart4223685.png" alt="Cart" width="30" /> Add
              to Cart
            </button>
            <button type="button" className="fav-button">
              <img src="./images/favourite.png" alt="Favourite" width="30" />
            </button>
          </div>
    </div>
  );
}

export default ProductTile;
