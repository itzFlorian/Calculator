import Buttons from "./ButtonGenerator"
import OutputField from "./OutputField"

const CalcEasyMath = ({output, setOutput}) => {
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

export default CalcEasyMath;