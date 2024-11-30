import React from 'react';

const ProductInfo = ({ product }) => {
  return (
    <div className="row p-2 my-2 bg-white">
      <p className="fw-light">
        {product.short_desc}
      </p>
      <div className="d-flex">
        <h5 className="me-2 fw-bold">₹{product.price}</h5>
        <h5 className="me-2 text-muted fw-bold text-decoration-line-through">₹{product.originalPrice}</h5>
        <h5 className="me-1 fw-bold" style={{ color: '#008C00' }}>
          99% off
        </h5>
      </div>
    </div>
  );
};

export default ProductInfo;
