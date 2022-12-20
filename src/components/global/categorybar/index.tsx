import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CategoryBar() {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        background: 'white',
        color: 'black',
        pt: '1rem',
        pr: '2rem',
        pl: '3rem',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/grocery.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Grocery
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/appliances.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Appliances
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/automobile.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Automobile
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/building.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Building Materials
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/electronics.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Electronics
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/fashion.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Fashion
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/food.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Food
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/furniture.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Furniture
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/logistics.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Logistic Service
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/mobile.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Mobile
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/real-estate.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Real Estate
          </Typography>
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            alt='category'
            src='/img/transport.jpg'
            width='100px'
            height='100px'
          />
          <Typography gutterBottom variant='h6' component='div'>
            Transportation Services
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
}
