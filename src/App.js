import React, { useState, useReducer } from 'react';
import Message from './components/Message/Message';
import { curriedMap } from './lib/utils';
import NavMenu from './components/NavMenu/NavMenu';
import { Grid } from '@material-ui/core';
import Page from './components/Page/Page';
import { reducer, changePage } from './reducers/page-reducer';
import './App.css';

export default ({ messages=[] }) => {
  const [page, dispatch] = useReducer(reducer, "FrontPage");

  const displayMessages = curriedMap(message => <Message { ...message } key={ message.text }/>);
  
  const buttons = [
    'Button One',
    'Button Two',
    'Button Three'
  ]

  const testMessages = require('./message-data.json');

  // CSS: Many grid items could likely be removed using pure css
  return (
    <Grid className="App" container >
      <Grid item>
        <NavMenu buttons={ buttons }/>
      </Grid>
      <Grid item>
        <Page>
          <p>{ "Hello World!" }</p>
          <div className="MessageList">
            {
              displayMessages(messages)
            }
            {
              displayMessages(testMessages)
            }
          </div>
        </Page>
      </Grid>
    </Grid>
  );
}
