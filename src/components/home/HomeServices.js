import React from "react";
import "./homeServices.css";
function HomeServices() {
  return (
    <div className="homeServices">
      <div className="head">
        <h3>Home Services</h3>
      </div>
      <div className="services">
        <div className="service">
          <img src="" alt="" />
          <p>Plumber</p>
        </div>
        <div className="service">
          <img src="" alt="" />
          <p>Plumber</p>
        </div>
        <div className="service">
          <img src="" alt="" />
          <p>Plumber</p>
        </div>
        <div className="service">
          <img src="" alt="" />
          <p>Plumber</p>
        </div>
        <div className="service">
          <div>
            <i class="bi bi-plus-lg"></i>
          </div>
          <p>View More</p>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
