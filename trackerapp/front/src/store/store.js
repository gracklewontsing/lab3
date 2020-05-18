import { createStore, applyMiddleware } from "redux";
import books from '../reducers/expenses';
import thunk from 'redux-thunk';

export default () => {
    return createStore(expenses, applyMiddleware(thunk));
};