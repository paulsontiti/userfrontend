import {
  Box,
  Button,
  Card,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import OrderSummary from '../../components/ordersummary';
import { token } from '../../theme';
import { useAppSelector } from '../../AppStore/store';
import { CartState } from '../../AppStore/slices/CartSlice';

export default function ReviewOrder() {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  //get shipping address from state
  const cart = useAppSelector((state: { cart: CartState }) => state.cart.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (cart.cartItems.length < 1) {
      navigate('/');
    }
  });
  return (
    <>
      {cart.cartItems.length > 0 ? (
        <Box sx={{ mt: '1rem' }}>
          <Typography variant='h6' sx={{ p: '1rem' }}>
            Confirm Your Order Details
          </Typography>
          <Box>
            <Card sx={{ background: colors.primary[700] }}>
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                sx={{ p: '1rem' }}
              >
                <Typography sx={{ fontWeight: '900' }}>
                  Delivery Details
                </Typography>
                <IconButton sx={{ display: 'flex', justifyContent: 'end' }}>
                  <EditIcon />
                </IconButton>
              </Box>
            </Card>
            <Card sx={{ background: colors.primary[600] }}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{ p: '1rem' }}
              >
                <Typography variant='body2'>Reciever's name:{'   '}</Typography>
                <Typography variant='caption'>
                  {shippingAddress.recieversName}
                </Typography>
              </Box>
            </Card>
            <Card sx={{ background: colors.primary[600] }}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{ p: '1rem' }}
              >
                <Typography variant='body2'>Phone:</Typography>
                <Typography variant='caption'>
                  {shippingAddress.contact}
                </Typography>
              </Box>
            </Card>
            <Card sx={{ background: colors.primary[600] }}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{ p: '1rem' }}
              >
                <Typography variant='body2'>Address:</Typography>
                <Typography variant='caption'>
                  {shippingAddress.address}
                </Typography>
              </Box>
            </Card>
          </Box>

          <OrderSummary />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              m: '1rem 1rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: '1rem 1rem',
              }}
            >
              <Button
                onClick={() => {
                  navigate('/order');
                }}
                variant='contained'
                sx={{ background: colors.greenAscent[900] }}
              >
                Place Order
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </>
  );
}
