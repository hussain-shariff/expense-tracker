import React, { useContext } from 'react';
import expenseContext from '../ExpenseContext';
import Form from './Form'
function History() {
  const { items, remove } = useContext(expenseContext);
  console.log(items);

  const listElements = items.map((item)=>{
    return (
          <li class={item.amount>0 ? 'plus' : 'minus'} key={item.id}>
              {item.name} <span>{item.amount>0 ? '+' : '-'}{Math.abs(item.amount)}/-</span>
              <button onClick = {()=>remove(item.id, item.amount)} class="delete-btn">x</button>
          </li>
    )
  })
  return (
    <>
        <h3>History</h3>
        <ul id="list" class="list">
            { listElements }
        </ul>
        <Form/>
    </>
  )
}

export default History