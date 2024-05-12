// import {  Avatar, Box, Divider,Toolbar,AppBar, FormGroup, Menu, MenuItem, Switch, Tooltip, Typography, styled ,Button} from "@mui/material";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CommentIcon from '@mui/icons-material/Comment';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Search } from "@mui/icons-material"
// import { alpha } from '@mui/material/styles';
// const settings = ['Profile','Logout'];
// ========================================================================================
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
// ========================================================================================
export default function Nav() {
  //   const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  //       width: 62,
  //       height: 34,
  //       padding: 7,
  //       '& .MuiSwitch-switchBase': {
  //         margin: 1,
  //         padding: 0,
  //         transform: 'translateX(6px)',
  //         '&.Mui-checked': {
  //           color: '#fff',
  //           transform: 'translateX(22px)',
  //           '& .MuiSwitch-thumb:before': {
  //             backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  //               '#fff',
  //             )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
  //           },
  //           '& + .MuiSwitch-track': {
  //             opacity: 1,
  //             backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
  //           },
  //         },
  //       },
  //       '& .MuiSwitch-thumb': {
  //         backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
  //         width: 32,
  //         height: 32,
  //         '&::before': {
  //           content: "''",
  //           position: 'absolute',
  //           width: '100%',
  //           height: '100%',
  //           left: 0,
  //           top: 0,
  //           backgroundRepeat: 'no-repeat',
  //           backgroundPosition: 'center',
  //           backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  //             '#fff',
  //           )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
  //         },
  //       },
  //       '& .MuiSwitch-track': {
  //         opacity: 1,
  //         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
  //         borderRadius: 20 / 2,
  //       },
  //     }));
  //     // ===============
  //     // Search
      
     
      
  //     const Search = styled('div')(({ theme }) => ({
  //       position: 'relative',
  //       borderRadius: theme.shape.borderRadius,
  //       backgroundColor: alpha(theme.palette.common.white, 0.15),
  //       '&:hover': {
  //         backgroundColor: alpha(theme.palette.common.white, 0.25),
  //       },
  //       marginLeft: 0,
  //       width: '100%',
  //       [theme.breakpoints.up('sm')]: {
  //         marginLeft: theme.spacing(1),
  //         width: 'auto',
  //       },
  //     }));
      
  //     const SearchIconWrapper = styled('div')(({ theme }) => ({
  //       padding: theme.spacing(0, 2),
  //       height: '100%',
  //       position: 'absolute',
  //       pointerEvents: 'none',
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     }));
      
  //     const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //       color: 'inherit',
  //       width: '100%',
  //       '& .MuiInputBase-input': {
  //         padding: theme.spacing(1, 1, 1, 0),
  //         // vertical padding + font size from searchIcon
  //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //         transition: theme.transitions.create('width'),
  //         [theme.breakpoints.up('sm')]: {
  //           width: '12ch',
  //           '&:focus': {
  //             width: '20ch',
  //           },
  //         },
  //       },
  //     }));
  //     // Search
  //     const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  // =================================================================================
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link style={{textDecoration:"none",color:"black"}} to="profile"><MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          {/* <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge> */}
          <Link to="rigster">
              <Button variant="contained" style={{backgroundColor:"rgb(13 202 240)"}}>Rigster</Button>
              </Link>
        </IconButton>
        {/* <p>Messages</p> */}
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          {/* <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge> */}
          <Link to="login">
            <Button variant="contained"style={{backgroundColor:"rgb(13 202 240)"}}>LogIn</Button>
            </Link>
        </IconButton>
        {/* <p>Notifications</p> */}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              
        </IconButton>
      </MenuItem>
    </Menu>
  );
  // =================================================================================

      
    return(
      <>
        {/* =============================================================================== */}
        <Box sx={{ flexGrow: 1,marginBottom:4 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{textDecoration:"none",color:"white"}} to="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' ,cursor:"pointer"} }}
          >
            Sociopedia
          </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              {/* <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge> */}
              <Link to="rigster">
              <Button variant="contained" style={{backgroundColor:"rgb(13 202 240)"}}>Rigster</Button>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge> */}
            <Link to="login">
            <Button variant="contained"style={{backgroundColor:"rgb(13 202 240)"}}>LogIn</Button>
            </Link>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            {/* <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
              </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
        {/* =============================================================================== */}
      </>
    )
}
        // <div>
        //     <div className="Parent mx-5 d-flex justify-content-between">
        //         <div className="d-flex align-items-center">
        //             <Link style={{textDecoration:"none",color:"black"}} to="/"><h2 className="fw-bold text-info">Sociopedia</h2></Link>
        //             <div className="ms-4">
        //             <Box  sx={{ flexGrow: 1 }}>
        //                 <Toolbar>
        //                   <Search className="shadow-sm ">
        //                     <SearchIconWrapper>
        //                       <SearchIcon />
        //                     </SearchIconWrapper>
        //                     <StyledInputBase
        //                       placeholder="Search…"
        //                       inputProps={{ 'aria-label': 'search' }}
        //                     />
        //                   </Search>
        //                   </Toolbar>
        //                   </Box>
        //                 {/* <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 , height:35 }} >
        //                 <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Your Friends" inputProps={{ 'aria-label': 'Search Your Friends' }}/>
        //                 <IconButton type="button" sx={{ p: '8px',transition:".4s" }} aria-label="search">
        //                     <SearchIcon />
        //                 </IconButton>
        //                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        //                 </Paper> */}
        //             </div>
        //         </div>
        //         <div className="d-flex justify-content-between align-items-center">
        //                   {/* start  */}
        //                   <Box sx={{ flexGrow: 0,marginRight:2 }}>
        //                           <Link to="login">
        //                             <Button  variant="contained" >
        //                               LogIn
        //                             </Button>
        //                           </Link>
        //                           <Link to="rigster">
        //                             <Button className="ms-3 bg-info"  variant="contained" >
        //                               Rigster
        //                             </Button>
        //                           </Link>
        //                       <Tooltip title="Open settings" className="ms-3">
                              
        //                           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        //                           <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        //                         </IconButton>
        //                       </Tooltip>
        //                       <Menu
        //                         sx={{ mt: '45px' }}
        //                         id="menu-appbar"
        //                         anchorEl={anchorElUser}
        //                         anchorOrigin={{
        //                           vertical: 'top',
        //                           horizontal: 'right',
        //                         }}
        //                         keepMounted
        //                         transformOrigin={{
        //                           vertical: 'top',
        //                           horizontal: 'right',
        //                         }}
        //                         open={Boolean(anchorElUser)}
        //                         onClose={handleCloseUserMenu}
        //                       >
        //                         {settings.map((setting,index) => (
        //                           index == 0 ? 
        //                           <MenuItem key={setting} onClick={handleCloseUserMenu}>
        //                             <Link to="Profile" style={{textDecoration:"none",color:"black"}} textAlign="center">{setting}</Link>
        //                           </MenuItem>
        //                           :
        //                           <MenuItem key={setting} onClick={handleCloseUserMenu}>
        //                             <Typography textAlign="center">{setting}</Typography>
        //                           </MenuItem>
        //                         ))}
        //                       </Menu>
        //   </Box>
        //               {/* end  */}
        //         <FormGroup>
        //         <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} label=""/>
        //         </FormGroup>
                
        //         <div className="d-flex ">
        //         <NotificationsIcon className="fs-3 me-3"/>
        //         <CommentIcon className="fs-3"/>
                
                
        //         </div>
        //         </div>
        //     </div>
        // </div>