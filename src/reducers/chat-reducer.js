// Actions
const ADD_CHAT_MESSAGE = "CHAT/ADD_CHAT_MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHAT/CHANGE_MESSAGE_TEXT";
const SEND_MESSAGE = "CHAT/SEND_MESSAGE";

// Action creators
const addMessage = ({
  username = '',
  message = ''
} = {}) => ({
  type: ADD_CHAT_MESSAGE,
  payload: {
    username,
    message
  }
});

const changeMessageText = (messageText = '') => ({
  type: CHANGE_MESSAGE_TEXT,
  payload: {
    messageText
  }
});

// for now this is just a mock, but it should send a message to a websocket.
const sendMessage = () => ({
  type: SEND_MESSAGE
})


const initialState = {
  username: '',
  messageText: '',
  messages: []
}
const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_CHAT_MESSAGE: return Object.assign({}, state, {messages: state.messages.concat(action.payload)});
    case CHANGE_MESSAGE_TEXT: return Object.assign({}, state, action.payload);
    case SEND_MESSAGE: return Object.assign({}, state, {messages: state.messages.concat({ username: state.username, message: state.messageText }), messageText: ''});
    default: return state;
  }
};

export { reducer, addMessage, changeMessageText, sendMessage }