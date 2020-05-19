import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddExpense} />
                <Route path="/expense/:id" component={EditExpense} />
                <Route component={NotFound} />

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;