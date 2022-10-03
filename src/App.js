import "./components/styles/app.css"
import ExpertMath from "./components/ExpertMath"
import EasyMath from "./components/EasyMath"
import {useState} from "react"
import { Route, Routes, Link} from "react-router-dom"

function App() {
  const [output, setOutput] = useState(" ")
  return (
    <>
      <nav>
        <Link className="link" to="/">EASY MATH</Link>
        <Link className="link" to="/expert">EXPERT MODE</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EasyMath output={output} setOutput={setOutput}/>}/>
        <Route path="/expert" element={<ExpertMath output={output} setOutput={setOutput}/>}/>
      </Routes>
    </>
    
    
  )
}

export default App