import React,{ useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Withdraw from './bank/pages/Withdraw';
import AllTransactions from './bank/pages/AllTransactions';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import CreateAccount from './bank/pages/CreateAccount';
import Deposit from './bank/pages/Deposit';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if(isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/bank/new" exact>
          <CreateAccount/>
        </Route>

        <Route path="/bank/deposit/:transactionId" exact>
          <Deposit/>
        </Route>

        <Route path="/bank/withdraw" exact>
          <Withdraw/>
        </Route>

        <Route path="/:userId/transactions" exact>
          <AllTransactions/>
        </Route>

        <Redirect to='/auth' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Redirect to='/auth' />
      </Switch>

    );
  }

  return (
    <AuthContext.Provider 
    value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}
    >
      <Router>
        <MainNavigation/>
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
