import React from 'react'

function BillingInfo(props) {
    return (
        <div className={props.nextTab === "billing" ? "content  active-content content-2" : "content"}>
            hi
            <button onClick={() => props.onClick("payment")}>Next</button>
        </div>
    )
}

export default BillingInfo
