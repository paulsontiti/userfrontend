import { useMediaQuery, useTheme } from '@mui/material';
import CategoryBar from '../../components/global/categorybar';
import MobileCategoryTopBarCarousel from '../../components/global/mobilecategorytopbar';
import ProductDetails from '../../components/global/ProductDetails';
import MobileTopBar from '../global/mobiletopbar';
import Topbar from '../global/topbar';

const item = {
  img: '/img/automobile.jpg',
  category: 'Automobile',
  name: 'V8 Engine',
  price: 50000,
  discount: '20%',
  quantity: 0,
  product: '63817109f613bb47ad9f3a9f',
  description: 'amazing logistics',
  rating: 2,
  likes: 0,
  dislikes: 0,
};
export default function Product() {
  const sm = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <>
      {sm ? <MobileTopBar /> : <Topbar />}
      {sm ? <MobileCategoryTopBarCarousel /> : <CategoryBar />}
      <ProductDetails item={item} />
    </>
  );
}
