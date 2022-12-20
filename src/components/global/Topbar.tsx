import { Box, IconButton, useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { token } from '../../theme';
import SideBar from './SideBar';

const Topbar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
    >
      <SideBar />
      <Box
        display='flex'
        borderRadius='3px'
        sx={{
          background: colors.primary[400],
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search...' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
