import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import ProductInfo from "./ProductInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductDescription } from "./ProductDescription";

export const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://flipkart-backend-ci0q.onrender.com/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // return (
  //   <div className="container mt-4">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <img
  //           src={product.image}
  //           alt={product.name}
  //           className="img-fluid"
  //           style={{ maxHeight: "400px", objectFit: "contain" }}
  //         />
  //       </div>
  //       <div className="col-md-6">
  //         <h2>{product.name}</h2>
  //         <p className="text-muted">{product.brand}</p>
  //         <p>{product.description}</p>
  //         <p className="fw-bold" style={{ fontSize: "1.5rem" }}>
  //           ₹{product.price}
  //         </p>
  //         <p className="text-muted text-decoration-line-through">
  //           ₹{product.originalPrice}
  //         </p>
  //         <p style={{ color: "#388E3C" }}>{product.discount} off</p>
  //         <button className="btn btn-primary">Add to Cart</button>
  //       </div>
  //     </div>
  //   </div>
  // );

return (
<>
<ProductCarousel productId={id}/>
<ProductInfo product={product} />
<ProductDescription product={product}/>
  

</>

);
};

export default ProductDetail;