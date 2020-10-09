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
    const message = {
      sender: "Test Sender",
      text: "Test Message"
    }
    const $ = render(<App messages={[message]}/>);

    assert ({
      given: 'A message',
      should: 'pass message text correctly',
      actual: $('.MessageList').children('.Message').first().children('.MessageText').html().trim(),
      expected: message.text
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

  {
    const $ = render(<App/>);

    assert ({
      given: 'nothing',
      should: 'Render NavMenu component',
      actual: $('.NavMenu').length,
      expected: 1
    });
  }
});