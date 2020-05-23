import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./components/auth/LoginComponent"
import RegisterComponent from "./components/auth/RegisterComponent"
import AuthenticationService from './components/auth/service/AuthenticationService'
import ExpenseList from './components/expenses/ExpenseList'

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined
        };
      }
    componentDidMount() {
        const user = AuthenticationService.getCurrentUser();

        if (user) {
          this.setState({
            currentUser: user
          });
        }
      }
    logOut() {
        AuthenticationService.logout();
      }


  render() {
      const { currentUser} = this.state;
        return (
            <Router>
              <div className="container">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                  ExpenseTrackr
                </Link>
                {currentUser ? (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/profile"} className="nav-link">
                            {currentUser.username}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a href="/login" className="nav-link" onClick={this.logOut}>
                            LogOut
                          </a>
                        </li>
                      </div>
                    ) : (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/login"} className="nav-link">
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to={"/register"} className="nav-link">
                            Sign Up
                          </Link>
                        </li>
                      </div>
                    )}
              </nav>
              <div className="container mt-3">
                  <Switch>
                    <Route path={["/", "/login"]} exact component={LoginComponent} />
                    <Route exact path="/register" component={RegisterComponent} />
                    <Route path={["/expenses","/home"]} exact component={ExpenseList} />
                  </Switch>
                </div>
              </div>
            </Router>
    );
  }
}
export default App;