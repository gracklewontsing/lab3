import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';

const EditExpense = props => (
    <div className='container__box'>
        <ExpenseForm
            expense={props.expense}
            onSubmitExpense={ (expense) => {
                //console.log(expense);
                //console.log(props);
                props.dispatch(editExpense(props.match.params.id, expense));
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