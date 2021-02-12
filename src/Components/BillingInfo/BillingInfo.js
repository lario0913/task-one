import React from 'react'
import './BillingInfo.css'

function BillingInfo(props) {
    return (
        <div className={props.nextTab === "billing" ? "content  active-content second-content" : "content"}>
            <div>
                <span><label>Name on Card</label><p>*</p></span>
                <input placeholder="Opara Linuc Ahmed" type="text"/>
            </div>
            <div>
                <span><label>Card Type</label><p>*</p></span>
                <select name="card">
                <option value="visa">Visa</option>
                <option value="verve">Verve</option>
                <option value="master-card">Master card</option>
            </select>
            </div>
            <div className="card-details">
                <div className="details">
                <span><label>Card Details</label><p>*</p></span>
                    <input placeholder="3646 4648 6474 7484" />
                </div>
                <div className="date">
                    <span><label>Expiry Date</label><p>*</p></span>
                    <input placeholder="24 / 23" />
                </div>
                <div className="cvv">
                <span><label>CVV</label><p>*</p></span>
                    <input placeholder="923" />
            </div>
        </div>
            <div className="confirm">
                <button onClick={props.onClick}>Next</button>
                <h3>Cancel payment</h3>
            </div>
        </div>
    )
}

export default BillingInfo
