import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';

import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../AppStore/store';
import { CartState } from '../../AppStore/slices/CartSlice';
import { token } from '../../theme';
import { ICartProduct } from '../../types';
import AddRemoveDelete from '../addremovedelete';

export default function OrderSummary(props: {
  closeDrawer?: (closed: boolean) => void;
  next?: string;
  url?: string;
}) {
  const { closeDrawer, next, url } = props;

  //get cart from state
  const cart = useAppSelector((state: { cart: CartState }) => state.cart.cart);

  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: '1rem' }}>
      {cart.cartItems.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            m: '1rem',
          }}
        >
          <Typography variant='caption' component='div' sx={{}}>
            Your total order is <span>N{cart.totalPrice}</span> naira
          </Typography>
          <Button
            variant='outlined'
            color='success'
            onClick={() => {
              closeDrawer && closeDrawer(false);
              navigate('/');
            }}
          >
            Add More Items
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography
            variant='h6'
            component='div'
            sx={{
              background: 'white',
              width: '100%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#0f2b63',
            }}
          >
            You have no order
          </Typography>
        </Box>
      )}
      {cart.cartItems.map((item: ICartProduct, index: number) => (
        <div key={index}>
          <Card sx={{ background: colors.primary[600] }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={item.img}
                alt=''
                style={{ width: '30%', height: '100%' }}
              />
              <Stack
                alignItems='center'
                justifyContent='center'
                sx={{ pl: '5px', width: '70%' }}
              >
                <Typography variant='caption' component='span'>
                  Items in cart: <strong>{item.quantity}</strong>
                </Typography>
                <Typography variant='caption' component='span'>
                  Total price: <strong>N{item.price * item.quantity}</strong>
                </Typography>
                <AddRemoveDelete item={item} />
              </Stack>
            </CardContent>
          </Card>
        </div>
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: '1rem 1rem',
        }}
      >
        {cart.cartItems.length > 0 ? (
          next && (
            <Button
              variant='contained'
              color='success'
              onClick={() => {
                closeDrawer && closeDrawer(false);

                url && navigate(url);
              }}
            >
              {next}
            </Button>
          )
        ) : (
          <Button
            variant='contained'
            color='success'
            onClick={() => {
              closeDrawer && closeDrawer(false);
              navigate('');
            }}
          >
            Add Items To Cart
          </Button>
        )}
      </Box>
    </Box>
  );
}
