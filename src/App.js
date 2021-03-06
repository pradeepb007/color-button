import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
   
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';


  return (
    <div>
      <button disabled ={disabled}
      style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      onClick = {()=>setButtonColor(newButtonColor)}      
      > 
      Color change to {newButtonColor}       
      </button>
      <br/>
      <input 
        type='checkbox' 
        id="disable-button-checkbox"
        defaultChecked = {disabled}
        aria-checked ={disabled}
        onChange = {(e)=>setDisabled(e.target.checked)}
        />
        <label htmlFor='disable-button-checkbox'>Disable Button</label>


    </div>
  );
}

export default App;
