import "./App.css";
import {Route} from 'react-router-dom'
import Tabs from './Components/Tabs/Tabs';
import Success from "./Components/Success/Success";

function App() {

  return (
    <div className="app">
        <Route path="/" exact component={Tabs} />
        <Route path="/success" exact component={Success} />
    </div>
  );
}
    
export default App;
