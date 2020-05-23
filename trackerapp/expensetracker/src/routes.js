import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './component/App';
import Login from './component/Login'
export const Routes = () => (
    <Switch>
      <Route exact path='/expenses' component={App} />
      <Route exact path='/login' component={Login} />
    </Switch>
);
export default Routes;