import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import navbar_styles from './Navbar.module.css';

//Aunthetication
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButoon } from '../features/Authentication/Login';


const pages = ['ABOUT', 'YOUR IMPACT', 'NEWS', 'CONTACT'];
const settings = ['Logout'];

// Mapeo de páginas a enlaces
const pageLinks = {
  ABOUT: '/about',
  'YOUR IMPACT': '/carbon',
  NEWS: '/news',
  CONTACT: '/contact',
};

function ResponsiveAppBar() {
     const [anchorElNav, setAnchorElNav] = React.useState(null);
     const [anchorElUser, setAnchorElUser] = React.useState(null);
     const { isAuthenticated, user, logout } = useAuth0();

     const handleOpenNavMenu = (event) => {
     setAnchorElNav(event.currentTarget);
     };

     const handleOpenUserMenu = (event) => {
     setAnchorElUser(event.currentTarget);
     };

     const handleCloseNavMenu = () => {
     setAnchorElNav(null);
     };

     const handleCloseUserMenu = () => {
     setAnchorElUser(null);
     };

     const handleLogout = () => {
          logout({returnTo: window.window.location.origin});
     }

     return (
     <AppBar position="static">
          <Container maxWidth="xl" sx={{ zIndex: 1000 }}>
          <Toolbar disableGutters>
               <div className={navbar_styles['linkPages-btn']}>
                    <img className={navbar_styles['Logo-img']} src='/Logo.png'  alt='Logo' sx={{display: { xs: 'none', md: 'flex'}, mr: 1}} />
                    <Typography
                         variant="h6"
                         noWrap
                         component="a"
                         href="/"
                         sx={{
                         mr: 2,
                         display: { xs: 'none', md: 'flex' },
                         fontFamily: 'monospace',
                         fontWeight: 700,
                         letterSpacing: '.3rem',
                         color: 'inherit',
                         textDecoration: 'none',
                         }}
                    >
                    Home
                    </Typography>
               </div>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
               <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleOpenNavMenu}
               color="inherit"
               >
               <MenuIcon />
               </IconButton>
               <Menu
               id="menu-appbar"
               anchorEl={anchorElNav}
               anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
               }}
               keepMounted
               transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
               }}
               open={Boolean(anchorElNav)}
               onClose={handleCloseNavMenu}
               sx={{ display: { xs: 'block', md: 'none' } }}
               >
               {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                         component="a"
                         href={pageLinks[page]}
                         sx={{
                         textAlign: 'center',
                         textDecoration: 'none',
                         color: 'inherit',
                         }}
                    >
                         {page}
                    </Typography>
                    </MenuItem>
               ))}
               </Menu>
               </Box>
               <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
               <Typography
               variant="h5"
               noWrap
               component="a"
               href="/"
               sx={{
               mr: 2,
               display: { xs: 'flex', md: 'none' },
               flexGrow: 1,
               fontFamily: 'monospace',
               fontWeight: 700,
               letterSpacing: '.3rem',
               color: 'inherit',
               textDecoration: 'none',
               }}
               >
               Home
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
               {pages.map((page) => (
               <div className={navbar_styles['linkPages-btn']}>
                    <Button
                         className={navbar_styles['linkPages-btn']}
                         key={page}
                         component="a"
                         href={pageLinks[page]} // Usa el enlace mapeado
                         onClick={handleCloseNavMenu}
                         sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                         {page}
                    </Button>
               </div>
               ))}
               </Box>
               <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Login">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                    {/*Autenticacion*/}
                    {isAuthenticated? (
                         <>
                              <Avatar alt="Remy Sharp" src={user.picture}/>
                         </>
                    ): (
                    <LoginButoon/>
                    )}
                    
               </IconButton>
               </Tooltip>
               <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
               >
               {settings.map((setting) => (
                    <MenuItem 
                         key={setting} 
                         onClick={setting === 'Logout'? handleLogout: handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
               ))}
               </Menu>
               </Box>
          </Toolbar>
          </Container>
     </AppBar>
  );
}

export default ResponsiveAppBar;
