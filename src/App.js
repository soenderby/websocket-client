import { map } from 'ramda';
import React from 'react';
import Message from './components/Message';
import { curriedMap } from './lib/utils';

export default ({ messages=[] }) => {

  const displayMessages = curriedMap((messages, index) => <Message { ...messages[index] }/>);

  return (
    <div className="App">
      <p>{ "Hello World!" }</p>
      <div className="MessageList">
        {
          displayMessages(messages)
        }
      </div>
    </div>
  );
}
