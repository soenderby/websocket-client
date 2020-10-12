import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './NavMenu.css';

export default ({ buttons=[], onClick }) => 
  <div className="NavMenu">
    <List>
      {
        buttons.map((button, index) => (
          <ListItem button className="NavButton" key={index} onClick={onClick}>
            <ListItemText primary={ button } />
          </ListItem>
          )
        )
      }
    </List>
  </div>