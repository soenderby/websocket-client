import React, { useState, useReducer } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import { Grid } from '@material-ui/core';
import Page from './components/Page/Page';
import { reducer, changePage } from './reducers/page-reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import MessagePage from './components/MessagePage/MessagePage';

import './App.css';

export default () => {
  const [page, dispatch] = useReducer(reducer, "MessagePage");

  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  );
  
  const buttons = [
    'Button One',
    'Button Two',
    'Button Three'
  ]

  // CSS: Many grid items could likely be removed using pure css
  return (
    <Provider store={store}>
      <Grid className="App" container >
        <Grid item>
          <NavMenu buttons={ buttons }/>
        </Grid>
        <Grid item>
          <Page>
            <p>{ "Hello World!" }</p>
            <MessagePage />
          </Page>
        </Grid>
      </Grid>
    </Provider>
  );
}
