import React from 'react'
import '../Listingform/listing.css'

export default function Listing() {
  return (
    <form action="">
    <div class="box">
        <h2>Creating a Listing</h2>
        <span class="line"></span>
        <div class="inside">
            <div class="hea1">
                <input type="text" class="first" placeholder="Name"/>
            </div>
            <div class="che">
                <input type="text" class="second" placeholder="Discription"/>
            </div>
            <div class="hea2">
                <input type="text" class="third" placeholder="Address"/>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Sell
                </label>
            </div>
            <div class="form-check1">
                <input class="form-check-input1" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label1" for="flexCheckChecked">
                  Rent
                </label>
            </div>
            <div class="form-check2">
                <input class="form-check-input2" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label2" for="flexCheckChecked">
                  Parking Spot
                </label>
            </div>
            <div class="form-check3">
                <input class="form-check-input3" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label3" for="flexCheckChecked">
                  Furnished
                </label>
            </div>
            <div class="form-check4">
                <input class="form-check-input4" type="checkbox" value="" id="flexCheckChecked"/>
                <label class="form-check-label4" for="flexCheckChecked">
                  Offer
                </label>
            </div>

            <div class="hea3">Beds<input type="text" class="forth" placeholder="1"/>
            </div>
            <div class="hea4">Baths<input type="text" class="five" placeholder="1"/>
            </div>
            <div class="hea5">Regular Price<input type="text" class="six" placeholder="0"/>
            </div>
            
        </div>
   </div>
</form>
  )
}
