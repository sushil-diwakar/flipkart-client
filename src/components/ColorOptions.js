import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColorOptions = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details from the API
        const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
        setProduct(response.data); // Assuming the API response contains product details including color options
        setSelectedColor(response.data.colorOption[0]?.color || ''); // Set default selected color
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      {/* Color Selection */}
      <div className="text-start mt-3">
        <h6 className="fw-bold">Select Color</h6>
        <div className="d-flex">
          {product.colorOption.map((option, index) => (
            <div
              key={index}
              className="p-3 text-center me-2"
              onClick={() => handleColorChange(option.color)}
              style={{
                border: selectedColor === option.color ? '2px solid rgba(65, 133, 251, 0.79)' : '1px solid gray',
                borderRadius: '0.6rem',
                maxWidth: '100px',
                boxShadow: selectedColor === option.color ? 'rgba(65, 133, 251, 0.79) 1px 1px 2px' : 'none',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                textAlign: 'center'
              }}
            >
              {/* Display the color image inside the box */}
              <img
                className="img-fluid mb-2"
                style={{ maxWidth: '70px', objectFit: 'cover', borderRadius: '8px' }}
                src={option.image} // Image for the color option
                alt={option.color}
              />
              <p className="mb-0">{option.color}</p> {/* Color Name */}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default ColorOptions;
