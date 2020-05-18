import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const BookList = (props) => (
    <div>
        Expenses:
        <ul>
            {props.expenses.map(expense => {
                return (
                    <li key={expense.id}>
                        <Expense {...expense} />
                    </li>
                );
            })}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state
    };
}

export default connect(mapStateToProps)(ExpenseList);