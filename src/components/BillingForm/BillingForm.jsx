// import React from 'react'
import styles from "./BillingForm.module.css";
function BillingForm() {
  return (
    <div className="container">
      <h1>Billing Section</h1>

      <div className={`${styles.customer_details}`}>
        <form action="">
          <div className={`${styles.form_control}`}>
            <label htmlFor="customername">CUSTOMER NAME</label>
            <input type="text" id="customername" placeholder="chandu" />
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="customeremail">CUSTOMER EMAIL</label>
            <input
              type="email"
              id="customername"
              placeholder="chandu95059@gamil.com"
            />
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="customermob">CUSTOMER MOBILENUMBER</label>
            <input type="text" id="customermob" placeholder="9505935354" />
          </div>
        </form>

        <form action="" className={`${styles.form1}`}>



          <div className={`${styles.form1_control}`}>
            <label htmlFor="tabuniqueid">TABUNIQUEID</label>
            <input type="text" />
          </div>

          <div className={`${styles.form1_control}`}>
            <label htmlFor="tabletname">TABLET NAME</label>
            <input type="text" id="tabletname"/>
          </div>

          <div className={`${styles.form1_control}`}>
            <label htmlFor="mfgdate">MANUFACTURING DATE</label>
            <input type="date" id="mfgdate"/>
          </div>

          <div className={`${styles.form1_control}`}>
            <label htmlFor="expdate">EXPIRY DATE</label>
            <input type="date" id="expdate"/>
          </div>    
          <div className={`${styles.form1_control}`}>
            <label htmlFor="qty">QTY</label>
            <input type="number" id="qty" />
          </div>
           <div className={`${styles.form1_control}`}>
            <label htmlFor="costprice">COST PRICE</label>
            <input type="number" id="costprice"/>
          </div> 

          <div className={`${styles.form1_control}`}>
            <label htmlFor="sellingprice">SELLING PRICE</label>
            <input type="number" id="sellingprice"/>
          </div>       



        </form>
      </div>
    </div>
  );
}

export default BillingForm;
