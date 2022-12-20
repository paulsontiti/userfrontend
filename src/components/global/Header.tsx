import { Typography, Box, useTheme } from '@mui/material';
import { token } from '../../theme';

const Header = (props: { title: string; subTitle: string }) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box mb='30px'>
      <Typography
        variant='h5'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ mb: '5px' }}
      >
        {props.title}
      </Typography>
      <Typography variant='h6' color={colors.greenAscent[400]}>
        {props.subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
