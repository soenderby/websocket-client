import React from 'react';
//import './Message.css';

// CSS: Sender and text should be in the same row
export default ({username='', message=''}) => 
  <div className="Message">
    <p className="SenderName"> { username } </p>
    <p className="MessageText"> { message } </p>
  </div>