import React, { useState } from 'react';
import Message from './components/Message';
import { curriedMap } from './lib/utils';
import NavMenu from './components/NavMenu';
import { Grid } from '@material-ui/core';

export default ({ messages=[] }) => {
  const [screen, setScreen] = useState(0);

  const displayMessages = curriedMap(message => <Message { ...message } key={ message.text }/>);
  
  const buttons = [
    { text: 'Button one', onClick: '' },
    { text: 'Button Two', onClick: '' },
    { text: 'Button Three', onClick: '' },
  ]

  const testMessages1 = [
    {
      sender: "Test sender",
      text: "Test Message",
    },
    {
      sender: "Another sender",
      text: "Another message"
    }
  ]
  
  const testMessages2 = [
    {
      sender: "Another page",
      text: "Should show this"
    }
  ]
  // CSS: Many grid items could likely be removed using pure css
  return (
    <Grid className="App" container justify="center">
      <Grid item>
        <NavMenu buttons={ buttons }/>
      </Grid>
      <Grid item>
        <p>{ "Hello World!" }</p>
        <div className="MessageList">
          {
            displayMessages(messages)
          }
        </div>
      </Grid>
    </Grid>
  );
}
