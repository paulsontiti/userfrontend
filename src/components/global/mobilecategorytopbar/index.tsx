import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { token } from '../../../theme';
import { Box, ListItemButton, Typography, useTheme } from '@mui/material';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const CategoryData = [
  {
    img: '/img/appliances.jpg',
    title: 'Appliances',
  },
  {
    img: '/img/appliances.jpg',
    title: 'Beauty',
  },
  {
    img: '/img/appliances.jpg',
    title: 'Health',
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
  {
    img: '/img/transport.jpg',
    title: 'Gift',
  },
  {
    img: '/img/transport.jpg',
    title: 'Kitchen',
  },
  {
    img: '/img/transport.jpg',
    title: 'Sports',
  },
  {
    img: '/img/transport.jpg',
    title: 'Cosmetics',
  },
  {
    img: '/img/transport.jpg',
    title: 'Drinks',
  },
  {
    img: '/img/transport.jpg',
    title: 'Pharmacy',
  },
  {
    img: '/img/transport.jpg',
    title: 'Air Conditioners',
  },
  {
    img: '/img/transport.jpg',
    title: 'Generators',
  },
  {
    img: '/img/transport.jpg',
    title: 'Jewelries',
  },
];

const MobileCategoryTopBarCarousel = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const settings = {
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <Box sx={{ m: '7px' }}>
      <Slider {...settings}>
        {CategoryData.map((item) => (
          <ListItemButton
            sx={{
              fontSize: '12px',
              background: colors.grey[500],
              borderRadius: '10px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {item.title}
          </ListItemButton>
        ))}
      </Slider>
    </Box>
  );
};

export default MobileCategoryTopBarCarousel;
