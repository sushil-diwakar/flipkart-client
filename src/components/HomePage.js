import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import custom CSS
import "./HomePage.css"; // Import custom CSS
import { ProductList } from "./ProductList";
import Carousel from './Carousel';


function HomePage() {
  return (
    <div className="container">
      <div class="row p-1  mt-3 text-center shadow-sm" style={{backgroundColor: "white",  overflowX: "auto",alignItems: "center"}}>
        <div class="col p-0 text-center d-flex " style={{alignItems: "center",alignContent: "center"}}>
            <div class=" text-center mx-auto">
                <img class="mx-3" width="50px" alt="Top Offers" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/085406bae47866d5.png?q=100"/>
                <p class="fw-bold m-0">Top Offers</p>
            </div>

            <div class="text-center mx-auto">
                <img class="mx-3" width="50px" alt="Mobiles &amp; Tablets" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/64f1cc66052c66ef.png?q=100"/>
                <p class="fw-bold m-0">Mobiles</p>
            </div>

            <div class=" text-center mx-auto">
                <img class="mx-3" width="50px" alt="Electronics" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1fd83847b32a09d1.png?q=100"/>
                <p class="fw-bold m-0">Electronics</p>
            </div>

            <div class="text-center mx-auto">
                <img class="mx-3" width="50px" alt="TVs &amp; Appliances" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6c0716819ac55121.png?q=100"/>            
                <p class="fw-bold m-0">TVs</p>
            </div>
            <div class="text-center mx-auto">
                <img class="mx-3" width="50px" alt="Fashion" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6dbed7ba5417672f.jpg?q=100"/>
                            <p class="fw-bold m-0">Fashion</p>
            </div>
          

            

        </div>

        


    </div>
    <Carousel/>
      <div class="row mt-2">
  <div class="col bg-white d-flex p-2 flex-column ">
    <h3 class="m-auto mb-2 text-primary">Deals of the Day</h3>
    <div class="m-auto d-flex ">
      <img class="me-2" src="/clock.svg" width="20px" alt="" srcset=""/>
      <h3 class="m-0 text-danger" id="time">14:42</h3>
    </div>

    <div class="_3Nxu4r m-auto mt-2">
      <button class="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
  </div>
  </div>


  
</div>
<ProductList/>
    </div>
    
  );
}

export default HomePage;
