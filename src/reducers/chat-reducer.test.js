import { describe } from 'riteway';
import { reducer, addMessage, changeMessageText, sendMessage } from './chat-reducer';

// Factories for easier testing

// Factory for reducer state, if given no arguments returns default state
const createState = ({
  username = '',
  messageText = '',
  messages = []
} = {}) => ({
  username,messageText, messages
});

describe('chat-reducer', async assert => {
  assert ({
    given: 'nothing',
    should: 'return a valid initial state',
    actual: reducer(),
    expected: createState()
  });

  describe('addMessage', async assert => {
    assert ({
      given: 'nothing',
      should: 'add default message',
      actual: reducer(undefined, addMessage()),
      expected: Object.assign(
        createState(), 
        {
          messages: [{
            username: '',
            message: ''
          }]
        }
      )
    });

    // Might be overkill to use Object.assing this much
    {
      const oldMessage = {
        username: 'OldUsername',
        message: 'old message'
      }
      const newMessage = {
        username: 'newUsername',
        message: 'new message'
      }
      assert ({
        given: 'a message',
        should: 'add the message to state',
        actual: reducer(
          Object.assign(createState(), {
            messages: [oldMessage]
          }),
          addMessage(newMessage)
        ),
        expected: Object.assign(
          createState(),
          {
            messages: [
              oldMessage,
              newMessage
            ]
          }
        )
      });
    }

    {
      const message = {
        username: 'testUsername',
        message: 'Test Message'
      }
      assert ({
        given: 'a state with messages and a message',
        should: 'add the message to state',
        actual: reducer(undefined, addMessage(message)),
        expected: Object.assign(
          createState(),
          {
            messages: [
              message
            ]
          }
        )
      });
    }
  });

  describe('changeMessageText', async assert => {
    assert ({
      given: 'initial state and nothing',
      should: 'not change initial state',
      actual: reducer(undefined, changeMessageText()),
      expected: createState()
    });

    {
      const message = 'Message text test'
      assert ({
        given: 'initial state and a messageText',
        should: 'change the messageText',
        actual: reducer(undefined, changeMessageText(message)),
        expected: Object.assign({}, 
          createState(), 
          {
            messageText: message
          }
        )
      });
    }
  });

  describe('sendMessage', async assert => {
    assert ({
      given: 'initial state and nothing',
      should: 'not change initial state',
      actual: reducer(undefined, sendMessage),
      expected: createState()
    });

    {
      const username = 'username';
      const message = 'Test Message';

      // I really don't know if there is any benefit in using Object.assign here
      const givenState = Object.assign({},
         createState(),
        {
          username: username, messageText: message
        }
      );

      const expectedState = Object.assign({},
        createState(),
        {
          username: username,
          messages: [
            {
              username: username,
              message: message
            }
          ]
        });

      assert ({
        given: 'state with messageText and username',
        should: 'add the message to messages and clear messageText',
        actual: reducer(givenState, sendMessage()),
        expected: expectedState
      });
      
    }
  });
});

