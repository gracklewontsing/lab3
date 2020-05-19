import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
    <div>
        <h3>Set Expense information:</h3>
        <ExpenseForm
            onSubmitExpense={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpense);
