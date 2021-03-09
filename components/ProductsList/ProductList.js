import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

export default function ProductList({ProductListData}) {
    return (
        <div className="product-list">
            {ProductListData.map((productData,index) => <ProductTile key={productData.id} index={index} productData={productData} />)}
        </div>
    )
}
