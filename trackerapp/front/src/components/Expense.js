import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const Expense = ({ id, date, amount, method, towhom, needwant, notes }) => (
    <div>
        <Link to={`/expense/${id}`}>
            <h4>{date} {amount} {method} {towhom} {needwant} {notes}</h4>
        </Link>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Expense);