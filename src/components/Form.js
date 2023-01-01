import React, { useContext, useRef } from 'react'
import expenseContext from '../ExpenseContext'

function Form() {
  const { add } = useContext(expenseContext);
  const inputText = useRef();
  const inputAmount = useRef();


  function handleSubmit(e){
    e.preventDefault();
    const name = inputText.current.value;
    const amount = inputAmount.current.value;
    const amountInNumber = + amount;
    if (inputText.current.value.trim().length === 0 ||
    inputAmount.current.value === ''){
      alert('enter all details')
      return
    }
    const id = Math.floor(Math.random()* 1000000);
    add(name, amountInNumber, id);
    inputText.current.value = '';
    inputAmount.current.value= '';
  }
  return (
    <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={handleSubmit}>
                <div class="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" id="text" ref={inputText} placeholder="Enter text..." />
                </div>
            <div class="form-control">
              <label htmlFor="amount"
                  >Amount <br />
                  (negative - expense, positive - income)</label>
              <input type="number" id="amount" ref={inputAmount} placeholder="Enter amount..." />
            </div>
            <button class="btn">Add transaction</button>
        </form>
    </div>
  )
}

export default Form