import React, { useState } from 'react';
import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
const pages = [
    'Toulouse',
    'Bordeaux',
    'Lyon',
    'Paris',
    'Marseille',
    'Nantes',
    'Perpignan',
    'Nice',
    'Montpellier',
    'Pau',
    'St-Etienne',
    'Grenoble',
    'Toulon',
    'Orléans',
];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton sx={{ color: '#CD2927' }}> NOS LOCALISATIONS</ListItemButton>
                    {pages.map((page, index) => (
                        <ListItemButton key={index} sx={{ paddingLeft: '25px' }}>
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                    <ListItemButton sx={{ color: '#CD2927' }}> Professionnels</ListItemButton>
                    <ListItemButton sx={{ color: '#CD2927' }}> Contact</ListItemButton>
                    <Divider sx={{ Width: '100%', m: 0.5 }} orientation="horizontal" />
                    <ListItemButton sx={{ color: '#CD2927' }}> S'identifier</ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{ color: '#CD2927', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon color="white" />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;
