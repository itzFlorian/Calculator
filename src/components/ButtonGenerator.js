const Buttons = ({output, setOutput}) => { 
  const buttons = ["on/off","C","AC","(",")","/","*","-","+",7,8,9,4,5,6,1,2,3,0,".","="]
  const numbers = ["0","1","2","3","4","5","6","7","8","9","."];
  const operators = ["0","1","2","3","4","5","6","7","8","9",".","(",")","/","*","-","+"];

  const clickHandler = (event)=>{
    if(operators.includes(event.target.innerText))   
      if(numbers.includes(output[output.length - 1])){
        setOutput(`${output}${event.target.innerText}`)
      }else{
        setOutput(`${output} ${event.target.innerText}`)          
      }

      if(event.target.innerText === "on/off"){
        const startValue = ""
        setOutput(startValue)
        document.querySelector(".output").classList.toggle("on")
      }
      if(event.target.innerText === "AC"){
        setOutput("")
      }
      if(event.target.innerText === "C"){
        setOutput(output.slice(0, -1))
      }
      if(event.target.innerText === "="){       
        // eslint-disable-next-line no-new-func
        const sum = Function("return " + output)()
        setOutput(sum)
      }
  }
  
  return(
    <div className="btn-container" onClick={clickHandler}>
      {buttons.map(button=><button className="button">{button}</button>)}
    </div>
    )
  }
export default Buttons