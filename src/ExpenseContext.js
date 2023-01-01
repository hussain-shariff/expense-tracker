import { type } from '@testing-library/user-event/dist/type';
import React, {createContext, useReducer} from 'react'
import reducer, { initialState} from './expenseReducer';
const expenseContext = createContext();

export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
    function addItem(name, amount, id){
    dispatch({
      type: 'ADD',
      name: name,
      amount: amount,
      id : id
    })
  }
  function removeItem(id, amount){
    dispatch({
      type: 'REMOVE',
      id: id,
      amount: amount 
    })
  }
  const values = {
    items: state.items,
    add: addItem,
    remove: removeItem,
    amount: state.amount,
    income: state.income,
    expense: state.expense

  }

  return (
    <expenseContext.Provider value={values}>
        { children }
    </expenseContext.Provider>
  )
}

export default expenseContext