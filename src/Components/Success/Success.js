import React from 'react'
import {Link} from 'react-router-dom'
import './Success.css'

function Success() {
    return (
        <div className="success-content">
            <div className="success-content-card">
                <div className="check">
                    <p>✓</p>
                </div>

                <div className="transaction-details">
                    <h3>Purchase Completed</h3>
                    <p>Please check your email for details concerning <br /> this transaction</p>

                    <Link to="/"> return home</Link>
                </div>

            </div>
        </div>
    )
}

export default Success
