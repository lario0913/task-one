import React from 'react'
import './FirstSection.css'

function FirstSection(props) {
    return (
        <div
        className={props.toggleState === 1 ? "content  active-content first-content" : "content"}
        >
        <div>
            <label>Name</label>
            <input placeholder="Opara Linus Ahmed" />
        </div>
        <div>
            <label>Email Address *</label>
            <p>The Purchase will be sent to this address</p>
            <input placeholder="OparaLinuxAhmed@devmail.com" />
        </div>
        <div>
            <label>Address 1</label>
            <input placeholder="The address of the user goes here"/>
        </div>
        <div>
            <label>Address 2</label>
            <input placeholder="and here" />
        </div>
        <div className="address">
            <div className="lga">
                <label>Local Government</label>
                <input placeholder="Surulere" />
            </div>
            <div className="state">
                <label>State</label>
                <input placeholder="Lagos" />
            </div>
        </div>
        <div className="confirm">
            <button onClick={props.onClick}>Next</button>
            <h3>Cancel payment</h3>
        </div>
    </div>
    )
}

export default FirstSection
