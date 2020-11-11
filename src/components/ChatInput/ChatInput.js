import React from 'react';
import { getEventValue } from '../../lib/utils';
import { Button, TextField, Input, Box } from '@material-ui/core';

export default ({ text='', changeMessage, onSubmit }) => 
  <div className="ChatInput" style={{ position: 'absolute', bottom: 0, display: 'flex', width: '80vw'}}>
    <TextField 
      variant="outlined" 
      multiline className="TextInput" 
      fullWidth
      type="text" 
      value={ text } 
      onChange={ event => changeMessage(getEventValue(event)) }
    />
      <Button color="primary" variant="contained" className="SubmitButton" onClick={ onSubmit }>
        {
          "Send"
        }
      </Button>
  </div>