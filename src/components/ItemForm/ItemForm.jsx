// import React from 'react'
import styles from "./ItemForm.module.css";
function ItemForm() {
  return (
    <div className="container">
      <div className={`${styles.item_form}`}>

        <h1>Add Items</h1>
        <form action="">

        <div className={`${styles.form_control}`}>
            <label htmlFor="tabuniqueid">TAB UNIQUE ID</label>
            <input type="number" id="tabuniqueid"/>
        </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="tablet_name">TABLET NAME</label>
            <input type="text" id="tablet_name"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="company_name">COMPANY NAME</label>
            <input type="text" id="company_name"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="mfgdate">MANUFACTURING DATE</label>
            <input type="date" id="mfgdate"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="expdate">EXPIRY DATE</label>
            <input type="date" id="expdate"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="qunatity">QTY</label>
            <input type="number" id="qunatity"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="tps">TABS PER STRIP</label>
            <input type="number" id="tps"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="cp">COST PRICE</label>
            <input type="number" id="cp"/>
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="sp">SELLING PRICE</label>
            <input type="number" id="sp"/>
          </div>

          
        </form>

        <button className={`${styles.formbtn}`}>Submit</button>
      </div>
    </div>
  );
}

export default ItemForm;
