import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProductList.css';


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="row mt-2">
      {products.map((product) => (
        <div key={product._id} className="col-6 p-2 position-relative">
          <div className="bg-white p-2 d-flex flex-column">
            <div className="text-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                type="button"
                className="_1l0elc"
                width="28"
                height="28"
                viewBox="0 0 20 16"
              >
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  fill="#CBCBCB"
                  className="eX72wL"
                  stroke="#FFF"
                  fillRule="evenodd"
                  opacity=".9"
                ></path>
              </svg>
            </div>
            <div className="m-auto p-3 image d-flex" style={{ maxWidth: "200px" }}>
              <img
                src={product.image}
                className="img-fluid"
                style={{ objectFit: "scale-down" }}
                alt={product.name}
              />
            </div>
            <div className="mt-auto no-wrap">
              <p className="text-muted" style={{ fontWeight: 200 }}>
                {product.brand_name} 
              </p>
              <p className="text-truncate mb-1" style={{ fontWeight: 100 }}>
                {product.short_desc}
              </p>
              <img className="mb-2" src="/SwOvZ3r.webp" width="77px" alt="Offer" />
              <p className="fw-bold me-2 mb-0" style={{ fontSize: "1rem" }}>
                ₹{product.price}
              </p>
              <div className="d-flex mt-1 ">
                <p
                  className="text-muted me-2 text-decoration-line-through mb-0"
                  style={{ fontSize: "1rem" }}
                >
                  ₹{product.originalPrice}
                </p>
                <p className="mb-0" style={{ color: "#388E3C", fontSize: "1rem" }}>
                  {product.discount} off
                </p>
              </div>
              <div className="d-flex" style={{ fontSize: "0.7rem" }}></div>
            </div>
          </div>
          <Link to={`/product/${product._id}`} className="stretched-link"></Link>
        </div>
      ))}
    </div>
  );
};