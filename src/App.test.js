import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import App from './App';

describe('App', async assert => {
  {
    const $ = render(<App/>);

    assert ({
      given: 'nothing',
      should: 'Render App component',
      actual: $('.App').length,
      expected: 1
    });
  }

  {
    const $ = render(<App/>);

    assert ({
      given: 'nothing',
      should: 'Render MessageList component',
      actual: $('.MessageList').length,
      expected: 1
    });
  }

  // MessageList component
  {
    const $ = render(<App messages={[]}/>);

    assert ({
      given: 'An empty list of messages',
      should: 'Render MessageList with no Message components',
      actual: $('.MessageList').children('.Message').length,
      expected: 0
    });
  }

  {
    const messages = [
      {
        sender: "Test Sender 1",
        text: "Test message 1"
      },
      {
        sender: "Test Sender 2",
        text: "Test message 2"
      }
    ]
    const $ = render(<App messages={messages}/>);

    assert ({
      given: 'A list of messages',
      should: 'Render MessageList with no Message components',
      actual: $('.MessageList').children('.Message').length,
      expected: 2
    });
  }
});