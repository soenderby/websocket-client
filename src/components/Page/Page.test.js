import React from 'react';
import render from 'riteway/render-component';
import { describe } from 'riteway';
import Page from './Page';

const createComponent = () => <div className="MockComponent"></div>;

describe('Page', async assert => {
  {
    const $ = render(<Page/>);

    assert ({
      given: 'nothing',
      should: 'render Page component',
      actual: $('.Page').length,
      expected: 1
    });
  }

  {
    const $ = render(
      <Page>
        {
          createComponent()
        }
      </Page>
    );

    assert ({
      given: 'a component',
      should: 'renders given component',
      actual: $('.MockComponent').length,
      expected: 1
    });
  }
});