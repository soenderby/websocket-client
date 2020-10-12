import React from 'react';
import './Page.css';

// Wrapper component defining layout for all pages
export default props => 
  <div className="Page">
    { props.children }
  </div>