import React from 'react'
import {Link} from 'react-router-dom'

function PaymentInfo(props) {
    return (
        <div className={props.nextTab === "payment" ? "content  active-content content-2" : "content"}>
            hi
            <Link to="/success">
                <button>success</button>
            </Link>
        </div>
    )
}

export default PaymentInfo
