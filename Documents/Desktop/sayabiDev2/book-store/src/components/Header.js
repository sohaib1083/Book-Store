import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';

const Header = () => {
    const [value, setvalue] = useState(0);
    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography><LibraryBooksRoundedIcon /></Typography>
                <Tabs textColor='inherit' indicatorColor='secondary' value={value}>
                    <Tab label="Add product" />
                    <Tab label="About Us" />
                </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header