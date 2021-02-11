import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import FirstSection from "./Components/FirstSection";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
     <div className="parent-container">
        <div className="container">
            <h1 className="heading">Complete your Purchase</h1>
            <div className="block-tabs">
                <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                >
                Tab 1
                </div>
                <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                >
                Tab 2
                </div>
                <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            >
            Tab 3
            </div>
            </div>

            <div className="content-tabs">

                <FirstSection 
                    onClick={() => toggleTab(2)}
                    toggleState={toggleState}
                />

                <div
            className={toggleState === 2 ? "content  active-content content-2" : "content"}
            >
            <h2>Content 2</h2>
            <hr />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
            </p>
            <button onClick={() => toggleTab(3)}>Next</button>
            </div>

                <div
            className={toggleState === 3 ? "content  active-content content-3" : "content"}
            >
            <h2>Content 3</h2>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                Accusamus in quia odit aspernatur provident et ad vel distinctio
                recusandae totam quidem repudiandae omnis veritatis nostrum
                laboriosam architecto optio rem, dignissimos voluptatum beatae
                aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
            <Link to="/success">
                <button>success</button>
            </Link>
            
            </div>
        </div>
        </div>
    
     </div> 
  
  );
}

export default Tabs;
