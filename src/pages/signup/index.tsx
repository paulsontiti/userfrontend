import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { token } from '../../theme';
import { signup, UserState } from '../../AppStore/slices/UserSlice';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import { signUpDetails } from '../../types';

const initialValues: signUpDetails = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  password: '',
  userName: '',
};

//const phoneRegExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('Invalid email').required('required'),
  contact: yup.string().required('required'),
  password: yup.string().required('required'),
  userName: yup.string().required('required'),
});

const SignUp = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const isNonMobile = useMediaQuery('(min-width:600px)');

  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/dashboard';

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  //login handler
  const handleFormSubmit = (values: signUpDetails) => {
    dispatch(signup(values));
    if (user) navigate(redirect);
  };
  return (
    <Box sx={{ m: '1rem 1rem' }}>
      <Box sx={{ mb: '1rem' }}>
        <Typography component='h5'> Create An Account </Typography>
        <Typography component='span'> have an account? </Typography>
        <Link
          to={`/login?redirect=${redirect}`}
          style={{
            textDecoration: 'none',
            color: colors.greenAscent[500],
          }}
        >
          Login
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
              display='grid'
              gap='2rem'
              gridTemplateColumns='repeat(4,minmax(0,1fr))'
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
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
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Contact'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: 'span 4' }}
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
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Username'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                name='userName'
                error={!!touched.userName && !!errors.userName}
                helperText={touched.userName && errors.userName}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='1rem'>
              <Button type='submit' color='secondary' variant='contained'>
                Create Account
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default SignUp;
