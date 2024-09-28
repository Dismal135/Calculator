import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import React from 'react'

function App() {
  const [input, setInput] = React.useState("0");
  const [calculated, setCalculated] = React.useState(false);

  const handleClick = (inputs) => {
    if (input.charAt(0) === "0") {
      setInput(input.slice(1) + inputs)
    } else if (calculated && !/[-+/*]/.test(inputs)) {
      setInput(inputs);
      setCalculated(false);
    }else if (calculated && input === "Error") {
      setInput("0");
      setCalculated(false);
    } else {
      setInput(input + inputs);
      setCalculated(false)
    }
  }

  const handleClear = () => {
    setInput("0");
    setCalculated(false)
  }

  const handleCalculate = () => {
    try{setInput(eval(input).toString());
    setCalculated(true);} catch (error) {
      setInput("Error");
      setCalculated(true);
    }
  }

  return (
    <>
    <Display input={input} />
    <Button id="equals" value={"="} handleClick={handleCalculate}/>
    <Button id="zero" value={"0"} handleClick={()=>handleClick("0")}/>
    <Button id="one" value={"1"} handleClick={()=>handleClick("1")}/>
    <Button id="two" value={"2"} handleClick={()=>handleClick("2")}/>
    <Button id="three" value={"3"} handleClick={()=>handleClick("3")}/>
    <Button id="four" value={"4"} handleClick={()=>handleClick("4")}/>
    <Button id="five" value={"5"} handleClick={()=>handleClick("5")}/>
    <Button id="six" value={"6"} handleClick={()=>handleClick("6")}/>
    <Button id="seven" value={"7"} handleClick={()=>handleClick("7")}/>
    <Button id="eight" value={"8"} handleClick={()=>handleClick("8")}/>
    <Button id="nine" value={"9"} handleClick={()=>handleClick("9")}/>
    <Button id="add" value={"+"} handleClick={()=>handleClick("+")}/>
    <Button id="subtract" value={"-"} handleClick={()=>handleClick("-")}/>
    <Button id="divide" value={"/"} handleClick={()=>handleClick("/")}/>
    <Button id="multiply" value={"x"} handleClick={()=>handleClick("*")}/>
    <Button id="decimal" value={"."} handleClick={()=>handleClick(".")}/>
    <Button id="clear" value={"clear"} handleClick={handleClear}/>
    </>
  );
}

export default App;
