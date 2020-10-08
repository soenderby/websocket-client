import React from 'react';

export default ({text = '', sender=''}) => 
  <div className="Message">
    <p className="SenderName"> { sender } </p>
    <p className="MessageText"> { text } </p>
  </div>