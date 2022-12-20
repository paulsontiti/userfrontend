import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  addShippingAddressToCart,
  CartState,
} from '../../AppStore/slices/CartSlice';
import { UserState } from '../../AppStore/slices/UserSlice';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import { IShippingAddress } from '../../types';

const CheckOut = () => {
  const dispatch = useAppDispatch();
  //get cart from state
  const cart = useAppSelector((state: { cart: CartState }) => state.cart.cart);
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/dashboard';

  const navigate = useNavigate();

  //checking if there is something in the cart
  useEffect(() => {
    if (cart.cartItems.length < 1) {
      navigate('/');
    }
    //checking if user is logged in
    if (!user.token) {
      navigate(`/login?redirect=${redirect}`);
    }
  }, [cart.cartItems, navigate, user.token, redirect]);

  const initialValues: IShippingAddress = {
    recieversName: '',
    contact: '',
    address: '',
  };

  const shippingAddressSchema = yup.object().shape({
    recieversName: yup.string().required('required'),
    contact: yup.string().required('required'),
    address: yup.string().required('required'),
  });

  //submit handler
  const handleFormSubmit = (values: IShippingAddress) => {
    dispatch(addShippingAddressToCart({ address: values }));
    navigate('/revieworder');
  };

  return (
    <Box sx={{ m: '5rem 1rem' }}>
      <Box sx={{ mb: '1rem' }}>
        <Typography variant='h6'>Enter Your Address Details</Typography>
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={shippingAddressSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              width='100%'
              gap='2rem'
              gridTemplateColumns='repeat(4,minmax(0,1fr))'
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label="Reciever's Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.recieversName}
                name='recieversName'
                error={!!touched.recieversName && !!errors.recieversName}
                helperText={touched.recieversName && errors.recieversName}
              />
              <TextField
                fullWidth
                variant='filled'
                type='tel'
                label='Phone Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name='address'
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />
              <Button type='submit' color='secondary' variant='contained'>
                Next
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CheckOut;
