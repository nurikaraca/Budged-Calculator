import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'react-uuid';



const initialExpense = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'credit card  bill', amount: 1200 }
]
function App() {
  const [expenses, setExpenses] = useState(initialExpense);


  return (

    <>
      <Alert />
      <h1> budget calculator</h1>
      <main className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>
      </main>

    </>
  );
}

export default App;
