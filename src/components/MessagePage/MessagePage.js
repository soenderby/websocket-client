import React from 'react';
import { curriedMap } from '../../lib/utils';
import Message from '../Message/Message';
import { connect } from 'react-redux';
import { addMessage, changeMessageText, sendMessage } from '../../reducers/chat-reducer';
import ChatInput from '../ChatInput/ChatInput';

import './MessagePage.css';

// The component is also exported, so that it can be tested without having to mock the store
// Consider refactoring to use react-redux hooks instead. Though it seems hooks encourage a tighter coupling
// Would make it hard to test, but for a purely container component, that might not be an issue
export const MessagePage = ({ messages=[], messageText='', changeMessage, onSubmit }) => {
  const displayMessages = curriedMap(message => <Message {...message} key={ message.message }/>);
  return (
    <div className="MessagePage">
      <div className="MessageList">
        {
          displayMessages(messages)
        }
      </div>
      {
        // The MessageInput and SubmitMessage should be refactored into a seperate display component
        // Another concern, is whether or not the content of MessageInput should be store in the store
        // Or simply in local state.
        // I don't see a need to update the store, and all that comes with it, every time character is
        // added. Although it could be useful if the state should persist. 
        // Example: user is typing message, then before sending it, changes the page, then changes back.
        // In this instance I think the state should persist, therefore the state should be stored in redux.
      }
      <ChatInput text={ messageText } changeMessage={ changeMessage } onSubmit={ onSubmit }/>
    </div>
  );
}

const mapStateToProps = state => ({ messages: state.chat.messages, messageText: state.chat.messageText });

const mapDispatchToProps = dispatch => ({
  changeMessage: message => dispatch(changeMessageText(message)),
  onSubmit: () => dispatch(sendMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);