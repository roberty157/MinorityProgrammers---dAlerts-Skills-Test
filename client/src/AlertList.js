import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts'
        
export default function AlertList(){
    return (
        <List>
          <ListItem disablePadding>
            
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItem>
                Sushi
            </ListItem>
              <ListItemText primary="Sushi" />
              <ListItemText primary="Pancake Swap" />
              <ListItemText primary="$0.62" />
              <ListItemText primary="$0.60" />
              <ListItemText primary="DISCORD"/>
              <ListItemText primary="CANCEL" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
    )
}     
        