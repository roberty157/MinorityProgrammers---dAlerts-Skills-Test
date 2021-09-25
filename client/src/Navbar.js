import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import {BrowserRouter as Route, Link} from 'react-router-dom';

import './Navbar.css';
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
export default function NavBar(){
  return(
    <div>
    <div class="topnav" style={{margin:'10px'}}>
      <div style={{color: 'white',float:'left'}} class="hoverEffect">

        <Link to="/" style={{color:'white', textDecoration:'none'}}>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                      </svg>
                    <div style={{fontSize:'8px'}}>dAlerts</div>
        </Link>
      </div>
      <div style={{color:'white',float:'left', marginLeft:'15px'}} class="hoverEffect">
          <Link to="/" style={{color:'white', textDecoration:'none'}}>
            My Alerts
          </Link>
        </div>
      
      
      <div class="topnav-right" style={{float:'right', color:'white'}}>
        hash address
        
      </div>
    </div>
    
    </div>
  )
}
//<hr style={{height:'1px',backgroundImage:'linear-gradient(to right, #256EFF,#F84F60)',marginTop:'40px',marginLeft:'0px',marginRight:'0px',padding:'0px'}}></hr>
/*
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
          <Link to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ><NotificationsNoneIcon/>
          </IconButton>
          </Link>
          
            
          <Link to ="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Alerts
            </Typography>
          </Link>
          
          <Button style={{float:'right'}}color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
*/
//<MenuIcon />