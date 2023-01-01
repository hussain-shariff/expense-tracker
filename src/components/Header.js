import React , { useContext } from 'react';
import expenseContext from '../ExpenseContext';

function Header() {
  const {amount, income, expense } = useContext(expenseContext);
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">{amount.toFixed(2)}Rs</h1>
        <div class="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" class="money plus">+Rs{ income.toFixed(2) }/-</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" class="money minus">-Rs{ expense.toFixed(2) }/-</p>
            </div>
        </div>
    </>
  )
}

export default Header