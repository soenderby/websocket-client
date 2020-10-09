import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

export default ({ buttons=[], setPage }) => 
  <div className="NavMenu">
    <Drawer anchor="left" open={true} variant="persistent">
      <List>
        {
          buttons.map((button, index) => (
            <ListItem button className="NavButton" key={index} onClick={  }>
              <ListItemText primary={ button.text } />
            </ListItem>
            )
          )
        }
      </List>
    </Drawer>
  </div>