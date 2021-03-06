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
      should: 'Render Page component',
      actual: $('.Page').length,
      expected: 1
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