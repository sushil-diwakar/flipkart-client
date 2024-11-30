import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function CheckoutPage() {
  const location = useLocation();
  const product = location.state?.product;

  const handleUPIPayment = (upiApp) => {
    const upiLink = `upi://pay?pa=merchant@upi&pn=Merchant&mc=1234&tid=txn12345&tr=order12345&tn=Pay%20for%20${product.name}&am=${product.price}&cu=INR`;
    switch (upiApp) {
      case "gpay":
        window.location.href = upiLink + "&url=https://pay.google.com";
        break;
      case "phonepe":
        window.location.href = upiLink + "&url=https://phonepe.com";
        break;
      case "paytm":
        window.location.href = upiLink + "&url=https://paytm.com";
        break;
      default:
        alert("UPI app not supported");
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Checkout</h1>
      <div className="card p-4">
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <h3 className="mt-4">Choose UPI App</h3>
        <div className="checkout-buttons">
          <button
            className="btn btn-primary"
            onClick={() => handleUPIPayment("gpay")}
          >
            Google Pay
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleUPIPayment("phonepe")}
          >
            PhonePe
          </button>
          <button
            className="btn btn-success"
            onClick={() => handleUPIPayment("paytm")}
          >
            Paytm
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
