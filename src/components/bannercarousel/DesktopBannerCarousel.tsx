import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const BannerData = [
  {
    img: '/img/appliances.jpg',
    title: 'Appliances',
  },
  {
    img: '/img/automobile.jpg',
    title: 'Automobile',
  },
  {
    img: '/img/building.jpg',
    title: 'Building',
  },
  {
    img: '/img/electronics.jpg',
    title: 'Electronics',
  },
  {
    img: '/img/fashion.jpg',
    title: 'Fashion',
  },
  {
    img: '/img/food.jpg',
    title: 'Food',
  },
  {
    img: '/img/furniture.jpg',
    title: 'Furniture',
  },
  {
    img: '/img/grocery.jpg',
    title: 'Grocery',
  },
  {
    img: '/img/logistics.jpg',
    title: 'Logistics',
  },
  {
    img: '/img/mobile.jpg',
    title: 'Mobile',
  },
  {
    img: '/img/real-estate.jpg',
    title: 'Real Estate',
  },
  {
    img: '/img/transport.jpg',
    title: 'Transport',
  },
];

const DesktopBannerCarousel = () => {
  //cretae setting for slider
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
  };
  return (
    <Box
      sx={{
        mt: '1rem',
        background: 'white',
      }}
    >
      <Slider {...settings}>
        {BannerData.map((item) => (
          <Link to='' style={{ textDecoration: 'none' }}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              sx={{
                width: '100%',
                height: '40vh',
              }}
            >
              <img
                alt='category'
                src={item.img}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
};

export default DesktopBannerCarousel;
