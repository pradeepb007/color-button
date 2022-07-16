import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  //const colorButton = screen.getByRole('button', { name: 'Color change to bule' });
   const colorButton = screen.getByRole('button', { name: 'Color change to blue' });

  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  //expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  
//Cliick event
fireEvent.click(colorButton);
//fireEvent.click(colorButton);

//color change after click
expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
//expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

//button text chnage after click
expect(colorButton.textContent).toBe('Color change to red');
//expect(colorButton.textContent).toBe('Change to red');

});

test('initial conditions', () =>{
render(<App/>);
const colorButton = screen.getByRole('button', {name : 'Color change to blue'});
expect(colorButton).toBeEnabled();

//Chckbox startout
const checkbox = screen.getByRole('checkbox');
expect(checkbox).not.toBeChecked();
});

test('checked conditions', () =>{
render(<App/>);
const colorButton = screen.getByRole('button', {name : 'Color change to blue'});
const checkbox = screen.getByRole('checkbox', {name : 'Disable Button'});

//Cliick event
fireEvent.click(checkbox);
expect(colorButton).toBeDisabled();

fireEvent.click(checkbox);
expect(colorButton).toBeEnabled();
});


test('disabled button has gray background and revert to red', ()=>{
render(<App/>);
const colorButton = screen.getByRole('button', {name : 'Color change to blue'});
const checkbox = screen.getByRole('checkbox', {name : 'Disable Button'});
//Disable button
fireEvent.click(checkbox);
expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
//RE Enable checkox
fireEvent.click(checkbox);
expect(colorButton).toHaveStyle({backgroundColor: 'red'});

});

test('clicked disabled button has gray background and revert to blue', ()=>{
  render(<App/>);
  const colorButton = screen.getByRole('button', {name : 'Color change to blue'});
  const checkbox = screen.getByRole('checkbox', {name : 'Disable Button'});

  //Change button blue
  fireEvent.click(colorButton);
  //Disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  //RE Enable checkox
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  
  });
  


