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
});