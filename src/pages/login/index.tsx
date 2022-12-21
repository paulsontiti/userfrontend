import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as yup from 'yup';
import { login, UserState } from '../../AppStore/slices/UserSlice';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import { LoginDetails } from '../../types';
import { token } from '../../theme';
import MobileTopBar from '../global/mobiletopbar';

const initialValues: LoginDetails = {
  email: '',
  password: '',
};

const userSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('required'),
  password: yup.string().required('required'),
});

const Login = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/dashboard';
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const dispatch = useAppDispatch();

  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  //login handler
  const handleFormSubmit = (values: LoginDetails) => {
    dispatch(login(values));
  };

  //check if user is logged in and redirect to dashboard
  useEffect(() => {
    if (user.token) {
      if (user.details.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(redirect);
      }
    }
  }, [user, navigate, redirect]);

  return (
    <>
      <MobileTopBar />

      <Box sx={{ m: '5rem 1rem' }}>
        <Box sx={{ mb: '1rem' }}>
          <Typography component='h5'> Enter Your Login Details </Typography>
          <Typography component='span'> don't have an account? </Typography>
          <Link
            to={`/signup?redirect=${redirect}`}
            style={{
              textDecoration: 'none',
              color: colors.greenAscent[500],
            }}
          >
            Sign Up
          </Link>
        </Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
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
                  label='Email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name='email'
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  variant='filled'
                  type='password'
                  label='Password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name='password'
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Button type='submit' color='secondary' variant='contained'>
                  Login
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};
export default Login;
