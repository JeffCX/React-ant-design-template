import React from 'react';
import { Router, Route, Switch, Redirect} from "react-router";
import history from './history/history';
import IndexPage from "./page/IndexPage"
import ProfilePage from "./page/ProfilePage"

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
              pathname: "/",
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
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Redirect to = "/" />
            </Switch>
          </main>
        </Router>
}

export default AppRouter
