import { Box } from '@mui/material';
import React from 'react';
import { Typography, useTheme, IconButton } from '@mui/material';
import '@fontsource/montez';
import MenuDrawer from '../../../components/menudrawer';
import CartDrawer from '../../../components/cartdrawer';
import SearchBox from '../../../components/global/searchBox';
import { token } from '../../../theme';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector } from '../../../AppStore/store';
import { UserState } from '../../../AppStore/slices/UserSlice';

const MobileTopBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  const navigate = useNavigate();
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box sx={{ flex: 1 }}>
          <MenuDrawer />
        </Box>
        <Box
          sx={{ flex: 1 }}
          onClick={() => {
            navigate('/');
          }}
        >
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Typography
              variant='h6'
              sx={{
                fontFamily: '"Montez","cursive"',
                fontWeight: 'bold',
              }}
            >
              Shop
            </Typography>
            <Typography variant='h6'>'</Typography>
            <Typography
              variant='h6'
              sx={{
                fontFamily: '"Montez","cursive"',
                fontWeight: 'bold',
                color: 'rgb(4, 187, 4)',
                mr: '10px',
              }}
            >
              Earn
            </Typography>
          </Box>
        </Box>
        {user.token && (
          <Box
            onClick={() => {
              navigate('/dashboard');
            }}
            sx={{ flex: 1 }}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Typography variant='caption'>{user.details.userName}</Typography>
            <img
              src={`/img/${user.details.dp ? user.details.dp : `user.jpg`}`}
              width='30px'
              height='30px'
              alt=''
              style={{ borderRadius: '50%' }}
            />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <CartDrawer />
        </Box>
      </Box>
      <SearchBox colors={colors} m='0 1rem' />
    </>
  );
};

export default MobileTopBar;
