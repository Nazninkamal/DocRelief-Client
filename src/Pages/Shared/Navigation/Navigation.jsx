import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import AdbIcon from '@mui/icons-material/Adb';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';



const Navigation = () => {
  const {user, logout} = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MedicationLiquidIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: "2rem",
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TeethRelief
          </Typography>

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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
          

            <Link to="/home" style={{textDecoration:"none"}} >
            <Button  color='inherit'>Home</Button>
            </Link>
            <Link style={{textDecoration:"none"}} to="/contact">
            <Button color='inherit'>Contact Us</Button>
            </Link>
            <Link to="/appoinment" style={{textDecoration:"none"}} >
            <Button color='inherit'>Appoinment</Button>
            </Link>
            </Menu>
          </Box>
          {/* <MedicationLiquidIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,

              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > T-Relief </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
           <Link style={{textDecoration:"none", color:"white"}} to="/home">
            <Button color='inherit'>Home</Button>
            </Link>
            <Link style={{textDecoration:"none", color:"white"}} to="/contact">
            <Button color='inherit'>Contact Us</Button>
            </Link>
            <Link style={{textDecoration:"none", color:"white"}} to="/appoinment">
            <Button color='inherit'>Appoinment</Button>
            </Link>
          </Box>

        
           
{
  user?.email ?
  <Box>
  <NavLink style={{textDecoration:"none", color:"white"}} to="/dashboard">
  <Button color="inherit">Dashboard</Button></NavLink>

  <Button onClick={logout} style={{textDecoration:"none", color:"white"}}>Logout</Button>

  </Box>
  :
  <NavLink style={{textDecoration:"none", color:"white"}} to="/login">
  <Button color="inherit">Login</Button></NavLink>

}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
