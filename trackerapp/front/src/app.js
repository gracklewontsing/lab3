import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { getExpenses } from './actions/expenses';
import './styles/styles.scss';

import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getExpenses()).then(() => {
    ReactDOM.render(template, document.getElementById('app'));
});
