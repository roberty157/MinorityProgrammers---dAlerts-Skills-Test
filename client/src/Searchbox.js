import * as React from 'react';
import Box from '@mui/material/Box';
import SearchButtonGroup from './SearchButtons';

import {BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Searchbox() {
    return (
        
        <Box sx={{ display: 'flex', height:'100%',margin:'auto', justifyContent:'center', alignItems:'center', border:'solid black 2px'}}>
            <Box sx={{marginTop:'50px', border:'solid black 2px'}}>
                <SearchButtonGroup></SearchButtonGroup>
            </Box>
        </Box>
    )
}

