import { useState } from "react";
import "../../App.css";
import BillingInfo from "../BillingInfo/BillingInfo";
import PaymentInfo from "../PaymentInfo/PaymentInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";


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
                    onClick={() => toggleTab("personal")}
                    className={nextTab === "personal" ? "tabs active-tabs" : "tabs"}
                >
                    Personal Info
                </div>
                <div 
                    onClick={() => toggleTab("billing")}
                    className={nextTab === "billing" ? "tabs active-tabs" : "tabs"}
                >
                    Billing Info
                </div>
                <div
                    onClick={() => toggleTab("payment")}
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
                <PaymentInfo nextTab={nextTab}
                />
            </div>
        </div>
    
     </div> 
  
  );
}

export default Tabs;