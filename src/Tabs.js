import { useState } from "react";
import "./App.css";
import BillingInfo from "./Components/BillingInfo/BillingInfo";
import PaymentInfo from "./Components/PaymentInfo/PaymentInfo";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";

function Tabs() {
  const [nextTab, setNextTab] = useState("personal");

  const toggleTab = (index) => {
    setNextTab(index);
  };

  return (
     <div className="parent-container">
        <div className="container">
            <h1 className="heading">Complete your Purchase</h1>
            <div className="block-tabs">
                <div
                className={nextTab === "personal" ? "tabs active-tabs" : "tabs"}
                >
                Personal Info
                </div>
                <div
                className={nextTab === "billing" ? "tabs active-tabs" : "tabs"}
                >
                Billing Info
                </div>
                <div
                    className={nextTab === "payment" ? "tabs active-tabs" : "tabs"}
                >
                    Confirm Payment
                </div>
            </div>

            <div className="content-tabs">

                <PersonalInfo 
                    onClick={() => toggleTab("billing")}
                    nextTab={nextTab}
                />

                <BillingInfo 
                    onClick={()=>toggleTab("payment")}
                    nextTab={nextTab}
                />

                <PaymentInfo 
                    nextTab={nextTab}
                />

            </div>
        </div>
    
     </div> 
  
  );
}

export default Tabs;