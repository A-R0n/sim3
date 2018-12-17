import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/login' component={Login} />
    <Route path='/sortinghat' component={SortingHat} />
    <Route path='/tutorial' component={Tutorial} />
    <Route path='/dailyprophet' component={Home} />
    <Route path='/profile/:id' component={Profile} />
    <Route path='/forum/:id' component={Forum} />
    <Route path='/post/:id' component={Post} />
    <Route path='/messages' component={Messages} />
    <Route path='/maps' component={Maps} />
    <Route path='/subscriptions' component={Subscriptions} />
    <Route path='/thequibbler' component={Mentions} />
    <Route path='/follows' component={Follows} />
    <Route path='/bookmarks' component={Bookmarks} />
    <Route path='/card' component={Card} />
    <Route path='/chat/:id' component={Chat} />
    <Route
      path='*'
      render={() => (
        <div>
          <h1>404</h1>
          <h1>Nothing to see here, muggle!</h1>
          <img
            src='https://66.media.tumblr.com/a0809c34a9c339f3c8e1b7a8824906d6/tumblr_ntcbzb5nDr1sfmnojo1_500.gif'
            alt='whooopies'
            width='100%'
            //
          />
        </div>
      )}
    />
  </Switch>
);
