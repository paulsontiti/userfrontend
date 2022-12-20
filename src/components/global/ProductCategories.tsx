import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

import ProductDetails from '../../components/global/ProductDetails';
import { ProductsCategory } from '../../data';
import MobileTopBar from '../../pages/global/mobiletopbar';
import Topbar from '../../pages/global/topbar';
import CategoryBar from './categorybar';
import MobileCategoryTopBarCarousel from './mobilecategorytopbar';

const ProductCategories = (props: { name: string }) => {
  const sm = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <>
      {sm ? <MobileTopBar /> : <Topbar />}
      {sm ? <MobileCategoryTopBarCarousel /> : <CategoryBar />}
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Typography
          component='div'
          variant='h6'
          sx={{
            background: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: '#0f2b63',
          }}
        >
          {props.name}
        </Typography>
        <Box>
          {ProductsCategory.map((item) => (
            <ProductDetails item={item} key={item.img} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductCategories;
