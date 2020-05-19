import axios from '../axios/axios';

const _addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const addExpense = (expenseData = {
    date: '',
    amount: 0,
    method: '',
    towhom: '',
    needwant: '',
    notes: ''
}) => {
    return (dispatch) => {
        const expense = {
            date: expenseData.date,
            amount: expenseData.amount,
            method: expenseData.method,
            towhom: expenseData.towhom,
            needwant: expenseData.needwant,
            notes: expenseData.notes
        };

        return axios.post('expenses/create', expense).then(result => {
            dispatch(_addExpense(result.data));
        });
    };
};

const _removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const removeExpense = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`expenses/${id}`).then(() => {
            dispatch(_removeExpense({ id }));
        })
    }
};

const _editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const editExpense = (id, updates) => {
    return (dispatch) => {
        return axios.put(`expenses/${id}`, updates).then(() => {
            dispatch(_editExpense(id, updates));
        });
    }
};

const _getExpenses = (expenses) => ({
    type: 'GET_EXPENSEs',
    expenses
});

export const getExpenses = () => {
    return (dispatch) => {
        return axios.get('expenses').then(result => {
            const expenses = [];

            result.data.forEach(item => {
                expenses.push(item);
            });

            dispatch(_getExpenses(expenses));
        });
    };
};