import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Message from './Message';

describe('Message', async assert => {
  {
    const $ = render(<Message/>);

    assert ({
      given: 'nothing',
      should: 'Render Message component',
      actual: $('.Message').length,
      expected: 1
    });
  }    
  
  {
    const message = "Test message";
    const $ = render(<Message text={message}/>);

    assert ({
      given: 'a message',
      should: 'render the given text',
      actual: $('.MessageText').html().trim(),
      expected: message
    });
  }

  {
    const user = "Test user";
    const $ = render(<Message sender={user}/>);

    assert ({
      given: 'a sender',
      should: 'render name of the given sender',
      actual: $('.SenderName').html().trim(),
      expected: user
    });
  }

  // This test is not really necessary, but i was unsure if this caused an error so i decided to test it.
  // Now there is no reason to remove it.
  {
    const message = {
      sender: 'Test User',
      text: 'Test Message'
    }
    const $ = render(<Message {...message}/>);

    assert ({
      given: 'message passed using object destructuring',
      should: 'render sender and text',
      actual: Object.assign({}, { sender: $('.SenderName').html().trim() }, { text: $('.MessageText').html().trim() }),
      expected: message
    });
  }
});