import { Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
// import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import { Router } from './Router';
import { SignIn } from '../pages/SignIn';
// import { SignUp } from '../pages/SignUp';

export const Routes = () => (
  <Switch>
    {/* <Router path="/" exact component={Home} /> */}
    <Router path="/signin" component={SignIn} />
    {/* <Router path="/signup" component={SignUp} /> */}
    <Router path="/dashboard" component={Dashboard} isPrivate />
    <Router path="*" component={PageNotFound} />
  </Switch>
);
