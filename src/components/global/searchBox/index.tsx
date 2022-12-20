import InputBase from '@mui/material/InputBase';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox(props: { colors: any; m?: string }) {
  return (
    <Box
      display='flex'
      borderRadius='3px'
      sx={{
        background: props.colors.primary[400],
        flex: 2,
        m: props.m,
      }}
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search for anything' />
      <IconButton type='button' sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
