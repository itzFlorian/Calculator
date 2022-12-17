import OutputField from "./components/OutputField.js"
import Buttons from "./components/ButtonGenerator.js";
import "./components/styles/app.css"
import { useState } from "react";


const App = () => {
  const [output, setOutput] = useState("")

  return (
    <div className="calc-container">
      <h1>Calculator</h1>
        <OutputField output={output} setOutput={setOutput}/>
      <div >
        <Buttons output={output} setOutput={setOutput}/> 
      </div>
    </div>
  );
};

export default App;