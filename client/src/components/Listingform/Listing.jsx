import React from 'react'
import styles from '../Listingform/Listing.module.css'

export default function Listing() {
  return (
    <>
    <h1 className={styles.heading}>Creating a Listing</h1>
      <div className={styles.formContainer}>
        
        <form id="login-form" className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="name" placeholder="Name" />
            <textarea rows="4" cols="54" className={styles.desc} name="Email" placeholder="Description"></textarea>
            <input type="text" name="password" placeholder="Address" />
          </div>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" id="sell" />Sell</label>
            <label><input type="checkbox" id="rent" />Rent</label>
            <label><input type="checkbox" id="parking-spot" />Parking spot</label>
            <label><input type="checkbox" id="furnished" />Furnished</label>
            <label><input type="checkbox" id="offer" />Offer</label>
          </div>
          <div className={styles.formGroup}>
            <input type="number" id="beds" defaultValue="1" min="0" />
            <label htmlFor="beds">Beds</label>
            <input type="number" id="baths" defaultValue="1" min="0" />
            <label htmlFor="baths">Baths</label>
          </div>
          <div className={styles.formGroups}>
            <input type="number" id="price" defaultValue="0" min="0" />
            <label htmlFor="price">Regular price<br />($ / Month)</label>
          </div>
          </form>
          <div className={styles.inputGroup}>
            <label htmlFor="images">Images: The first image will be the cover (max 6)</label>
            <input type="file" id="images" name="images" multiple />
            <button className={styles.uploadBtn}>Upload</button>
            <button className={styles.createBtn}>Create Listing</button>
          </div>
        
      </div>
    </>
  )
}