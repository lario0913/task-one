import React from 'react'
import {Link} from 'react-router-dom'
import "./PaymentInfo.css"

function PaymentInfo(props) {
    return (
        <div className={props.nextTab === "payment" ? "content  active-content third-content" : "content"}>
            <section className="third-content-card">
                <div className="card-header">
                    <p>Item Name</p>
                    <p> &#8358; Price</p>
                </div>
                <div className="card-content">
                    <div className="product">
                        <div>
                            <p>Data Science and usability</p>
                            <p>50,000.00</p>
                        </div>
                        <div>
                            <p>Shipping</p>
                            <p>0.00</p>
                        </div>
                    </div>
                    <div className="total">
                        <p>Total</p>
                        <p>50,000</p>
                    </div>

                </div>
            </section>
            
            <section className="confirm">
                {/* <button><Link to="/success">Pay</Link></button> */}
                <Link to="/success">Pay</Link>
                <h3>Cancel payment</h3>
            </section>
        </div>
    )
}

export default PaymentInfo
