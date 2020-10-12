import { describe } from 'riteway';

import { reducer, changePage } from './page-reducer';

describe('page-reducer', async assert => {
  assert ({
    given: 'nothing',
    should: 'return a valid initial state',
    actual: reducer(),
    expected: "none"
  });

  assert ({
    given: 'initial state and a changePage action',
    should: 'change page to given page',
    actual: reducer(undefined, changePage("newPage")),
    expected: "newPage"
  });

  assert ({
    given: 'a page and a changePage action',
    should: 'change page to given page',
    actual: reducer("oldPage", changePage("newPage")),
    expected: "newPage"
  });
});