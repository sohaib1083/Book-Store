import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [value, setvalue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
                <Toolbar>
                    <Typography><LibraryBooksRoundedIcon /></Typography>
                    <Tabs
                    sx={{ml:"auto"}}
                    textColor='inherit' 
                    indicatorColor='secondary' 
                    value={value} onChange={(e, val) => setvalue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add product" />
                        <Tab LinkComponent={NavLink} to="/books" label="Books" />
                        <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header