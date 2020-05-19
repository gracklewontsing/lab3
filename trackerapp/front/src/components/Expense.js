import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const Expense = ({ id, date, amount, method, towhom, needwant, notes }) => (
    <div>
        <Link to={`/expense/${id}`}>
            <h4> {id} </h4>
        </Link>
            <h4>{date} {amount} {method} {towhom} {needwant} {notes}</h4>
        <button onClick={() => {
            console.log({id});
            dispatch(removeExpense({id}));
        }}>Remove Expense</button>
    </div>
);
/*
const mapDispatchToProps = (dispatch) => {
    return {
        removeExpense: id => dispatch(removeExpense(id))
    }
}

export default connect(null, mapDispatchToProps)(Expense);
*/

export default connect()(Expense);