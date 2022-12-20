import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ColorModeContext, token } from '../../../theme';
import '@fontsource/montez';
import TopBarMenu from '../../../components/menu';
import SearchBox from '../../../components/global/searchBox';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          flex: 2,
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
        <Box>happy customer,share the experience</Box>
      </Box>
      <SearchBox colors={colors} />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          flex: 1,
        }}
      >
        <Button
          variant='contained'
          color='success'
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/sigunp')}
        >
          Sign Up
        </Button>
      </Box>
      <TopBarMenu />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          flex: 1,
        }}
      >
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <Typography>Cart</Typography>
      </Box>
    </Box>
  );
};

export default Topbar;
