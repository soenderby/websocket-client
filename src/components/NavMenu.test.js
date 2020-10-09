import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import NavMenu from './NavMenu';

describe('NavMenu', async assert => {
  {
    const $ = render(<NavMenu/>)

    assert ({
      given: 'nothing',
      should: 'render NavMenu Component',
      actual: $('.NavMenu').length,
      expected: 1
    });
  }

  {
    const buttons = [
      { text: 'Button 1' },
      { text: 'Button 2' },
      { text: 'Button 3' }
    ]
    const $ = render(<NavMenu buttons={ buttons }/>)

    assert ({
      given: 'a list of buttons with text members',
      should: 'render NavButton Components for each button',
      actual: $('.NavButton').length,
      expected: 3
    });
  }
});