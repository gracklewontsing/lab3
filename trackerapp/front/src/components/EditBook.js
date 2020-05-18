import React from 'react';
import ExpenseFormForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';

const EditExpense = (props) => (
    <div className='container__box'>
        <ExpenseFormForm
            expense={props.expense}
            onSubmitExpense={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expense: state.find((expense) =>
            expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpense);