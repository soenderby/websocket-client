import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';

import { MessagePage } from './MessagePage';

describe('MessagePage', async assert => {
  {
    const $ = render(<MessagePage/>);
    assert ({
      given: 'nothing',
      should: 'render MessagePage component',
      actual: $('.MessagePage').length,
      expected: 1
    });
  }

  {
    const $ = render(<MessagePage/>);
    assert ({
      given: 'nothing',
      should: 'render MessageList component',
      actual: $('.MessageList').length,
      expected: 1
    });
  }

  {
    const $ = render(<MessagePage messages={[]}/>);

    assert ({
      given: 'An empty list of messages',
      should: 'Render MessageList with no Message components',
      actual: $('.MessageList').children('.Message').length,
      expected: 0
    });
  }

  // Is this an integration test?
  // And is it therefore irrelevant?
  {
    const message = {
      sender: "Test Sender",
      text: "Test Message"
    }
    const $ = render(<MessagePage messages={[message]}/>);

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
    const $ = render(<MessagePage messages={messages}/>);

    assert ({
      given: 'A list of messages',
      should: 'Render MessageList with no Message components',
      actual: $('.MessageList').children('.Message').length,
      expected: 2
    });
  }
});