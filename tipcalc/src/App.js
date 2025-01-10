import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Select } from "./components/Select"
import {BillInput} from "./components/BillInput"
import {ButtonReset} from "./components/ButtonReset"

  function App() {
  
  const [value, setValue] = useState("")
  const [percent_1, setPercent_1] = useState(0)
  const [percent_2, setPercent_2] = useState(0)
  const tip = (((percent_1 + percent_2) / 2 /100) * value).toFixed(2)
  const total = value + Number(tip)

  function reset() {
    setValue(0)
    setPercent_1(0)
    setPercent_2(0)
  }
  
  return (
    <div className="App">
      <header>
        <h1 className='text-4xl'>Tip Calcultor</h1>
      </header>
      <main className="tip-calculator mt-16 flex flex-col gap-4">
      <BillInput label="How much was the bill?" value={value} setValue={setValue}/>
        {/* {newFunction(bill, setBill)}   */}
        

        <Select label="How did you like the service?" percent={percent_2} setPercent={setPercent_2}/>
        <Select label="How did your friend like the service?" percent={percent_1} setPercent={setPercent_1}/>
          
        {/* {newFunction(percent_2, setPercent_2)}   */}
      </main>
      <footer>
        <div className='text-3xl my-16 text-center text-bold'>
          <p>Food - {value} $</p>
          <p>+</p>
          <p>{tip} $ tip</p>
          <p>You pay</p>
          <p>{total} $</p>
        </div>
        <ButtonReset reset={reset}/>
      </footer>
    </div>
  );
}

export default App;





