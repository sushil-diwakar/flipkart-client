import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorOptions from './ColorOptions';

const ProductCarousel = ({ productId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Replace with your API endpoint that fetches product details
        const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
        setImages(response.data.images || []); // Assuming the API response contains an "images" array
      } catch (error) {
        console.error('Error fetching product images:', error);
      }
    };

    fetchImages();
  }, [productId]);

  if (images.length === 0) {
    return <div>Loading images...</div>;
  }

  return (
    <div className="container-fluid">
      <div className='row border bg-white'>
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{
                maxHeight: '400px',
               minHeight: '400px',
              }}
            >
              <img
                src={image}
                className="d-block img-fluid m-auto"
                alt={`Product Image ${index + 1}`}
                
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "placeholder.jpg"; // Fallback image
                }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ColorOptions productId={productId}/>
      </div>
      
    </div>
  );
};

export default ProductCarousel;
