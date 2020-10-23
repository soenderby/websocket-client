import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import ChatInput from './ChatInput';

describe('ChatInput', async assert => {
  {
    const $ = render(<ChatInput/>);

    assert ({
      given: 'nothing',
      should: 'render a ChatInput component',
      actual: $('.ChatInput').length,
      expected: 1
    });
  }
  {
    const $ = render(<ChatInput/>);

    assert ({
      given: 'nothing',
      should: 'render TextInput component',
      actual: $('.TextInput').length,
      expected: 1
    });
  }

  {
    const message = 'Test Message';
    const $ = render(<ChatInput text={message}/>);

    assert ({
      given: 'some text',
      should: 'render TextInput with given text',
      actual: $('.TextInput').val(),
      expected: message
    });
  }

  {
    const $ = render(<ChatInput/>);

    assert ({
      given: 'nothing',
      should: 'render SubmitButton component',
      actual: $('.SubmitButton').length,
      expected: 1
    });
  }
});