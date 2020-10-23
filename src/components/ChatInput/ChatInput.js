import React from 'react';
import { getEventValue } from '../../lib/utils';

export default ({ text='', changeMessage, onSubmit }) => 
  <div className="ChatInput">
    <input className="TextInput" type="text" value={ text } onChange={ event => changeMessage(getEventValue(event)) }/>
      <button className="SubmitButton" onClick={ onSubmit }>
        {
          "Send"
        }
      </button>
  </div>