import React, { useState } from 'react';
import { Drawer, useTheme } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import '@fontsource/montez';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { token } from '../../theme';

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <List>
          <ListItem>
            <ListItemButton onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </ListItemButton>
          </ListItem>
        </List>
        <Drawer
          variant='temporary'
          anchor='left'
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Box display='flex' alignItems='center' p='1rem'>
            <ListItemButton
              sx={{
                background: colors.greenAscent[500],
                borderRadius: '10px',
                mr: '10px',
              }}
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Login
            </ListItemButton>
            <ListItemButton
              sx={{
                background: colors.grey[900],
                borderRadius: '10px',
              }}
              onClick={() => {
                navigate('/signup');
                setIsOpen(false);
              }}
            >
              Sign Up
            </ListItemButton>
          </Box>
          <List>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/');
                }}
              >
                <HomeIcon />
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/about');
                }}
              >
                <HomeIcon />
                <ListItemText>About Us</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=food');
                }}
              >
                <HomeIcon />
                <ListItemText>Resturant</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=electronics');
                }}
              >
                <HomeIcon />
                <ListItemText>Electronics</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=health');
                }}
              >
                <HomeIcon />
                <ListItemText>Health & Wellness</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=fashion');
                }}
              >
                <HomeIcon />
                <ListItemText>Fashion & Clothes</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=market');
                }}
              >
                <HomeIcon />
                <ListItemText>Market Square</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=phones');
                }}
              >
                <HomeIcon />
                <ListItemText>Phone & Accessories</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=computer');
                }}
              >
                <HomeIcon />
                <ListItemText>Computer & Accessories</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=stores');
                }}
              >
                <HomeIcon />
                <ListItemText>Super Market</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/products?category=building');
                }}
              >
                <HomeIcon />
                <ListItemText>Building Materials</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/logistics');
                }}
              >
                <HomeIcon />
                <ListItemText>Logistics</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/betting');
                }}
              >
                <HomeIcon />
                <ListItemText>Betting</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/transportation');
                }}
              >
                <HomeIcon />
                <ListItemText>Transportation Services</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/hospitality');
                }}
              >
                <HomeIcon />
                <ListItemText>Hospitality</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/real-estate');
                }}
              >
                <HomeIcon />
                <ListItemText>Real Estate</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setIsOpen(false);
                  navigate('/mlm');
                }}
              >
                <HomeIcon />
                <ListItemText>Business</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>{' '}
        </Drawer>
      </Box>
    </>
  );
}
