import { Select, MenuItem, Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { UserState } from '../../../AppStore/slices/UserSlice';
import { useAppSelector } from '../../../AppStore/store';
import Header from '../../../components/global/Header';
import axiosInstance from '../../../helpers/axios';

type Pro = {
  name: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  img: any;
};

interface ICat {
  id: string;
  name: string;
}

const productSchema = yup.object().shape({
  name: yup.string().required('required'),
  price: yup.string().required('required'),
  quantity: yup.string().required('required'),
  description: yup.string().required('required'),
  category: yup.string().required('required'),
});
const NewProduct = () => {
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);
  const navigate = useNavigate();
  //initial value for formik
  const initialValues: Pro = {
    name: '',
    price: 0,
    description: '',
    quantity: 0,
    category: '',
    img: '',
  };

  const [cate, setCate] = useState<ICat[]>([]);
  //get all customers from the database
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get(
          '/categories/getCategoriesName',
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setCate(data.Categories);
      } catch (err: any) {
        alert(err.response.data.message);
      }
    })();
  }, [user.token]);

  //handle form submit
  const handleFormSubmit = async (values: any) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    try {
      const { data } = await axiosInstance.post('/products/create', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (data.pro) {
        alert('new product successfully created');
        navigate('/admin/products');
      }
      if (data.msg) alert(data.msg);
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <Box>
      <Header title='CREATE PRODUCT' subTitle='Create a New Product' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={productSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Box
              display='grid'
              gap='2rem'
              gridTemplateColumns='repeat(4,minmax(0,1fr))'
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name='name'
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='number'
                label='Price'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name='price'
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='number'
                label='Quantity'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name='quantity'
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Description'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name='description'
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: 'span 2' }}
              />
              <input
                type='file'
                name='img'
                accept='image/*'
                onChange={(e: any) =>
                  setFieldValue('img', e.currentTarget.files[0])
                }
              />

              <Select
                label='Category'
                variant='filled'
                name='category'
                onBlur={handleBlur}
                error={!!touched.category && !!errors.category}
                sx={{ gridColumn: 'span 2' }}
                value={values.category}
                onChange={handleChange}
              >
                {cate &&
                  cate.map((item) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
              </Select>
            </Box>
            <Box display='flex' justifyContent='end' mt='1rem'>
              <Button type='submit' color='secondary' variant='contained'>
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default NewProduct;
