import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpProfessional from '../pages/SignUpProfessional';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Professional from '../pages/Professional';
import Schedule from '../pages/Schedule';
import Duration from '../pages/Duration';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/registerProfessional" component={SignUpProfessional} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/professionals" component={Professional} isPrivate />
      <Route path="/schedules" component={Schedule} isPrivate />
      <Route path="/duration" component={Duration} isPrivate />
    </Switch>
  );
}
