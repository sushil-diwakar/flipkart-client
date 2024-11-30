import React from 'react'

export const ProductDescription = ({ product }) => {
  return (
    <>
    <div className="row bg-white d-flex p-3 mb-1 mt-2 border">
      <img className="m-auto" src="/pay-latter.webp" alt="pay-later" />
    </div>

    <div className="row py-2 bg-white border mt-1">
      <div className="col-4 d-flex flex-column text-center">
        <img className="m-auto mb-2" width="30px" src="/replacement.webp" alt="7 days Replacement" />
        <p className="m-0" style={{ fontSize: '0.6rem' }}>7 days Replacement</p>
      </div>

      <div className="col-4 d-flex flex-column text-center">
        <img className="m-auto mb-2" width="30px" src="/non-cod.webp" alt="No Cash On Delivery" />
        <p className="m-0" style={{ fontSize: '0.6rem' }}>No Cash On Delivery</p>
      </div>

      <div className="col-4 d-flex flex-column text-center">
        <img className="m-auto" width="70px" src="/plue-fassured.webp" alt="Plus (F-Assured)" />
        <p className="m-0" style={{ fontSize: '0.6rem' }}>Plus (F-Assured)</p>
      </div>

      <div className="row mt-2">
        <div className="col p-3">
            <p className="fw-bold">Product Detail</p>
            <p>{product.product_details}</p>
        </div>
      </div>
   </div>
    
    </>
  )
}
