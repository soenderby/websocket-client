import React from 'react';


// CSS: Sender and text should be in the same row
export default ({sender='', text=''}) => 
  <div className="Message">
    <p className="SenderName"> { sender } </p>
    <p className="MessageText"> { text } </p>
  </div>