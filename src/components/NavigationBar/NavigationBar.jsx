// import React from "react";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className="container">
      <div className={`${styles.navbar}`}>
        <div>
          <h1>Vijaya Medicals & General Store</h1>
        </div>

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Add Items</li>
          <li>Billing Info</li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
