import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "#2874F0" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <div className="d-flex">
            <i
              className="fa-solid fa-bars text-white m-auto me-2"
              style={{ fontSize: "1.1rem" }}
            ></i>

            {/* Adjusted the image src */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/brand.png"
              width="70px"
              alt="Flipkart Logo"
              title="Flipkart"
            />
            </Link>
          </div>
        </a>
        <div className="d-flex">
          <div className="ms-auto">
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff" fillRule="evenodd">
                <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path>
                <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path>
                <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path>
                <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path>
                <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path>
              </g>
            </svg>
          </div>
        </div>
        <form className="w-100">
          <input
            type="text"
            style={{ border: "none", borderRadius: "2px" }}
            className="form-control"
            placeholder="Search for Products, Brands and More"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </form>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
