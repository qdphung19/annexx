import React from 'react';
import { AppBar, Button, Grid, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import DrawerComp from './Drawer';
import { Box } from '@mui/system';

const Header = () => {
    const theme = useTheme();
    // console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(isMatch);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleClose = () => {
        setAnchorElNav(null);
    };

    const openMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ background: '#E2EAEB' }}>
                <Toolbar>
                    <AddBusinessRoundedIcon sx={{ transform: 'scale(2)', color: '#CD2927' }} />
                    <Typography sx={{ fontSize: '2rem', paddingLeft: '16px', color: '#CD2927' }}>Annexx</Typography>
                    {isMatch ? (
                        <>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '48px' }}>
                                <Button onClick={openMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    NOS LOCALISATIONS
                                </Button>
                                <Button sx={{ my: 2, color: 'black', display: 'block' }}>PROFESSIONNELS</Button>
                                <Button sx={{ my: 2, color: 'black', display: 'block' }}>CONTACT</Button>
                                <Menu
                                    anchorEl={anchorElNav}
                                    // disableScrollLock
                                    keepMounted
                                    open={Boolean(anchorElNav)}
                                    onClose={handleClose}
                                    id="menu-appbar"
                                    sx={{ width: '100%' }}
                                >
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <MenuItem onClick={handleClose}>Toulouse</MenuItem>
                                            <MenuItem onClick={handleClose}>Bordeaux</MenuItem>
                                            <MenuItem onClick={handleClose}>Lyon</MenuItem>
                                            <MenuItem onClick={handleClose}>Paris</MenuItem>
                                            <MenuItem onClick={handleClose}>Marseille</MenuItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <MenuItem onClick={handleClose}>Nantes</MenuItem>
                                            <MenuItem onClick={handleClose}>Perpignan</MenuItem>
                                            <MenuItem onClick={handleClose}>Nice</MenuItem>
                                            <MenuItem onClick={handleClose}>Montpellier</MenuItem>
                                            <MenuItem onClick={handleClose}>Pau</MenuItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <MenuItem onClick={handleClose}>St-Etienne</MenuItem>
                                            <MenuItem onClick={handleClose}>Grenoble</MenuItem>
                                            <MenuItem onClick={handleClose}>Toulon</MenuItem>
                                            <MenuItem onClick={handleClose}>Orléans</MenuItem>
                                        </Grid>
                                    </Grid>
                                </Menu>
                            </Box>
                            <Button
                                sx={{ marginLeft: 'auto', fontSize: '12px', background: '#CD2927' }}
                                variant="contained"
                            >
                                S'identifier
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
