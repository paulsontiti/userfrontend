import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fontsource/montez';

import {
  Box,
  Card,
  CardContent,
  ListItemButton,
  Typography,
  useTheme,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { token } from '../../theme';

const BannerData = [
  {
    img: '/img/appliances.jpg',
    category: 'Appliances',
    title: 'Home Cleaner',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/automobile.jpg',
    category: 'Automobile',
    title: 'V8 Engine',
    price: 50000,
    discount: '20%',
    todaysPrice: 40000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/building.jpg',
    category: 'Building',
    title: 'Wooden Tiles',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/electronics.jpg',
    category: 'Electronics',
    title: 'Samsung',
    price: 55000,
    discount: '20%',
    todaysPrice: 44000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/fashion.jpg',
    category: 'Fashion',
    title: 'Pateck Watch',
    price: 100000,
    discount: '20%',
    todaysPrice: 80000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/food.jpg',
    category: 'Food',
    title: 'Sharwama',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/furniture.jpg',
    category: 'Furniture',
    title: 'Office Table',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/grocery.jpg',
    category: 'Grocery',
    title: 'Indomie',
    price: 3000,
    discount: '20%',
    todaysPrice: 2400,
    timeLeft: '5hrs',
  },
  {
    img: '/img/logistics.jpg',
    category: 'Logistics',
    title: 'Personal Driver',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/mobile.jpg',
    category: 'Mobile',
    title: 'Lenovo',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
  {
    img: '/img/real-estate.jpg',
    category: 'Real Estate',
    title: ' Duplex',
    price: 5000,
    discount: '20%',
    todaysPrice: 4000,
    timeLeft: '5hrs',
  },
];

const CategorySlider = (props: { name: string }) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const navigate = useNavigate();

  const title = props.name.toUpperCase();
  const url = props.name.toLowerCase();

  //cretae setting for slider
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    arrows: false,
  };
  return (
    <Box
      sx={{
        background: 'white',
      }}
    >
      <Box display='flex' alignItems='center'>
        <Box sx={{ flex: 2 }}>
          <Typography
            sx={{
              color: colors.greenAscent[800],
              p: '1rem',
              fontSize: '0.7rem',
              fontWeight: 'bold',
            }}
            variant='caption'
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, color: colors.blueAscent[100] }}>
          <ListItemButton
            sx={{
              color: colors.greenAscent[800],
              fontSize: '0.7rem',
              fontWeight: '400',
            }}
            onClick={() => navigate(`/${url}`)}
          >
            View All
          </ListItemButton>
        </Box>
      </Box>

      <Slider {...settings}>
        {BannerData.map((item) => (
          <Card
            key={item.img}
            sx={{
              background: 'white',
              height: '130px',
            }}
          >
            <CardContent>
              <img
                alt='category'
                src={item.img}
                style={{ width: '100%', height: '50px' }}
              />
              <Stack
                justifyContent='center'
                alignItems='start'
                sx={{ color: colors.primary[500] }}
              >
                <Typography variant='caption'>{item.title}</Typography>
                <Typography variant='caption'>{item.price}</Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CategorySlider;
