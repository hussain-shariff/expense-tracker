export const initialState = {
    items: [],
    amount: 0,
    income: 0,
    expense: 0
}


export default function reducer(state, action){
    if(action.type === 'ADD'){
        const updatedList = state.items.concat({name:action.name, amount: action.amount, id: action.id});
        const updatedAmount = state.amount + action.amount;
        let updatedIncome;
        let updatedExpense;
        if (action.amount > 0){
            updatedIncome = state.income + action.amount;
            updatedExpense = state.expense;
        }else{
            updatedExpense = state.expense + action.amount;
            updatedIncome = state.income;
        }
        return{
            items: updatedList,
            amount: updatedAmount,
            income: updatedIncome,
            expense: updatedExpense
        }
    }
    if(action.type === 'REMOVE'){
        const updatedItems = state.items.filter(item=> item.id !== action.id);
        const amounts = updatedItems.map(item => item.amount);
        const updatedAmount = amounts.reduce((acc, item) => (acc += item), 0);
        let updatedIncome = state.income;
        let updatedExpense = state.expense;
        if (action.amount > 0){
            updatedIncome = state.income - action.amount;
        }else{
            updatedExpense = state.expense + Math.abs(action.amount);
        }
        return{
            items: updatedItems,
            amount: updatedAmount,
            income: updatedIncome,
            expense: updatedExpense
        }
    }
}
