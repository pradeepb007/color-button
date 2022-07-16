import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
   
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';


  return (
    <div>
      <button disabled ={disabled}
      style={{backgroundColor: buttonColor}}
      onClick = {()=>setButtonColor(newButtonColor)}      
      > 
      Color change to {newButtonColor}       
      </button>
      <br/>
      <input 
        type='checkbox' 
        id="enable-button-checkbox"
        defaultChecked = {disabled}
        aria-checked ={disabled}
        onChange = {(e)=>setDisabled(e.target.checked)}
        />


    </div>
  );
}

export default App;
