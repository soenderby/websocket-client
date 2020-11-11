import React from 'react';
import { List, ListItem, ListItemText, ButtonGroup, Button } from '@material-ui/core';
import './NavMenu.css';

export default ({ buttons=[], onClick }) => 
  <div className="NavMenu" style={{ height: '100%'}}>
    <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="vertical contained primary button group"
      variant="text"
      >
      {
        buttons.map((button, index) => (
          <Button className="NavButton" key={index} onClick={onClick}>
            { button }
          </Button>
          )
        )
      }
    </ButtonGroup>
  </div>