import { Box, ListItemButton, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { token } from '../../../theme';
import Header from '../../../components/global/Header';
import SideBar from '../global/SideBar';
import Topbar from '../global/Topbar';
import axiosInstance from '../../../helpers/axios';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../AppStore/store';
import { UserState } from '../../../AppStore/slices/UserSlice';

const Products = () => {
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  const [prods, setProds] = useState(null);
  //get all customers from the database
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get('/products', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setProds(data.products);
      } catch (err: any) {
        alert(err.response.data.message);
      }
    })();
  }, []);

  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Product Name',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'slug',
      headerName: 'Slug',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      type: 'number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },

    {
      field: 'img',
      headerName: 'Images',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
  ];
  return (
    <Box display='flex'>
      <SideBar />
      <Box width='100vw'>
        <Topbar />
        <Header title='Products' subTitle='All Products' />
        <ListItemButton
          onClick={() => navigate('/admin/newProduct')}
          sx={{ color: colors.greenAscent[500] }}
        >
          Create New
        </ListItemButton>
        {prods ? (
          <Box height='75vh'>
            <DataGrid rows={prods} columns={columns} />
          </Box>
        ) : (
          <h1>No Products</h1>
        )}
      </Box>
    </Box>
  );
};
export default Products;
