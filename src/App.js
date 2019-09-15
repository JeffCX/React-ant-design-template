import React from 'react';
import { Router, Route, Switch, Redirect} from "react-router";

import history from './history/history';

const Index = () => {
  return <div>
            Hello React
        </div>
}

const Profile = () => {
  return <div>
            Hello Profile Page
        </div>
}

const isLogin = true

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


const AppRouter = () =>{
  return <Router history={history}>
          <main>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/profile" component={Profile} />
              <Redirect to = "/" />
            </Switch>
          </main>
        </Router>
}

export default AppRouter
