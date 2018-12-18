import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Component/Auth/Auth';
import Form from './Component/Form/Form';
import Dashboard from './Component/Dashboard/Dashboard';
import Post from './Component/Post/Post';

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/post/post:id" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
