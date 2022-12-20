import React, { useState } from 'react';
import { IconButton, Badge, Drawer } from '@mui/material';
import { useAppSelector } from '../../AppStore/store';
import { CartState } from '../../AppStore/slices/CartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '@fontsource/montez';
import { Box } from '@mui/system';
import OrderSummary from '../ordersummary';

export default function CartDrawer() {
  //get cart from state
  const cart = useAppSelector((state: { cart: CartState }) => state.cart.cart);
  const NoOfItemsInCart = cart.cartItems.length;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={{ maxWidth: '20%' }}>
      <IconButton onClick={() => setIsOpen(true)}>
        <Badge badgeContent={NoOfItemsInCart} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer
        variant='temporary'
        anchor='right'
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          marginTop: '3rem',
        }}
      >
        <OrderSummary
          closeDrawer={(isOpen: boolean) => {
            setIsOpen(isOpen);
          }}
          url='/login?redirect=/checkout'
          next='Proceed To Checkout'
        />
      </Drawer>
    </Box>
  );
}
