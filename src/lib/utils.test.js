import { describe } from 'riteway';
import {
  trace 
} from './utils';

describe('trace', async assert => {
  {
    const value = 1;
    assert({
      given: 'a string and a value',
      should: 'return the given value',
      actual: trace('a value')(value),
      expected: value
    });
  }

  {
    const value = 'test value';
    const partialTrace = trace('a test value');
    assert({
      given: 'partial application and a value',
      should: 'return given value',
      actual: partialTrace(value),
      expected: value
    });
  }
});