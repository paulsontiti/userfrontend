import { Select, MenuItem, Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { UserState } from '../../../AppStore/slices/UserSlice';
import { useAppSelector } from '../../../AppStore/store';
import Header from '../../../components/global/Header';
import axiosInstance from '../../../helpers/axios';

type Cat = {
  name: string;
  img: any;
  parentId: string;
};

interface ICat {
  id: string;
  name: string;
}

const initialValues: Cat = {
  name: '',
  img: '',
  parentId: '',
};

const categorySchema = yup.object().shape({
  name: yup.string().required('required'),
  img: yup.string().required('required'),
});

const NewCategory = () => {
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  const navigate = useNavigate();

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
      const { data } = await axiosInstance.post(
        '/categories/create',
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data.cat) {
        alert('new category successfully created');
        navigate('/admin/categories');
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <Box>
      <Header title='CREATE CATEGORY' subTitle='Create a New Category' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={categorySchema}
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
              <label> Upload File</label>
              <input
                type='file'
                name='img'
                accept='image/*'
                onChange={(e: any) =>
                  setFieldValue('img', e.currentTarget.files[0])
                }
              />

              <Select
                labelId='parentId'
                name='parentId'
                label='Parent Id'
                variant='filled'
                onBlur={handleBlur}
                error={!!touched.parentId && !!errors.parentId}
                sx={{ gridColumn: 'span 2' }}
                value={values.parentId}
                onChange={handleChange}
              >
                <MenuItem value='' selected={true}>
                  Select Parent Category
                </MenuItem>
                {cate &&
                  cate.map((item) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
              </Select>
            </Box>
            <Box display='flex' justifyContent='end' mt='1rem'>
              <Button type='submit' color='secondary' variant='contained'>
                Create New Category
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default NewCategory;
