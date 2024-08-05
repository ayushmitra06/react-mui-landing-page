import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => (
    <>
      <MenuItem onClick={handleClose}>
        <ScrollLink to="hero-section" smooth={true} duration={500}>Home</ScrollLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ScrollLink to="feature-section" smooth={true} duration={500}>Features</ScrollLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ScrollLink to="service-section" smooth={true} duration={500}>Services</ScrollLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ScrollLink to="gallery-section" smooth={true} duration={500}>Gallery</ScrollLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink>
      </MenuItem>
    </>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        {!isMobile ? (
          <div className="nav-links">
            <Button color="inherit">
              <ScrollLink to="hero-section" smooth={true} duration={500}>Home</ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="feature-section" smooth={true} duration={500}>Features</ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="service-section" smooth={true} duration={500}>Services</ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="gallery-section" smooth={true} duration={500}>Gallery</ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink>
            </Button>
          </div>
        ) : (
          <div className="menu-icon">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {renderMenuItems()}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
