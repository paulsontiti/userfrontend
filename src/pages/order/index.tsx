import { Box, Button } from '@mui/material';

import { useEffect, useState } from 'react';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import { UserState } from '../../AppStore/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import { CartState, IOrder, placeOrder } from '../../AppStore/slices/CartSlice';

export default function Order() {
  //get cart from state
  const cart = useAppSelector((state: { cart: CartState }) => state.cart.cart);
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //checking if user is logged in
  //useEffect(() => {
  // if (!user.token) {
  //   navigate(`/login`);
  // }
  //}, [user.token, navigate]);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState('');

  // creates a paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Sunflower',
            amount: {
              currency_code: 'USD',
              value: 110,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        //application_context: {
        //  shipping_preference: "NO_SHIPPING",
        //},
      })
      .then((orderID: string) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      setSuccess(true);
      const { payer } = details;
      const order: IOrder = {
        cartProducts: cart.cartItems,
        userToken: user.token,
        paymentDetails: {
          email: payer.email,
          given_name: payer.name.given_name,
          surname: payer.name.surname,
          payer_id: payer.payer_id,
          orderId: orderID,
        },
        paymentMethod: 'paypal',
        shippingAddress: cart.shippingAddress,
        totalPrice: cart.totalPrice,
      };

      dispatch(placeOrder(order));
    });
  };

  //place order handler
  const placeOrderHandler = () => {
    const order: IOrder = {
      cartProducts: cart.cartItems,
      userToken: user.token,
      paymentDetails: {
        email: user.details.email,
        given_name: user.details.firstName,
        surname: user.details.lastName,
        payer_id: user.details._id,
      },
      paymentMethod: 'cash',
      shippingAddress: cart.shippingAddress,
      totalPrice: cart.totalPrice,
    };

    dispatch(placeOrder(order));
  };

  useEffect(() => {
    if (cart.cartItems.length < 1) {
      navigate('/');
    }
    if (cart.successful) {
      navigate('/dashboard');
    }
  }, [cart.successful, navigate, cart.cartItems.length]);
  return (
    <Box sx={{ mt: '5rem' }}>
      <PayPalScriptProvider
        options={{
          'client-id': process.env.PAYPAL_CLIENT_ID
            ? process.env.PAYPAL_CLIENT_ID
            : 'Ad_ntfUtZ6eoXZ7PfJMkVCIJRW4IQo8CXhPPPJiySj6PAHETtOPfi5NpVXB_kWf7FAAoiagtBqH1L4YC',
        }}
      >
        <PayPalButtons
          //style={{ layout: 'horizontal' }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={() => {
            alert('An Error occured with your payment ');
            setErrorMessage('An Error occured with your payment ');
          }}
        />
      </PayPalScriptProvider>
    </Box>
  );
}
