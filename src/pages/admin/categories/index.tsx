import { Box, ListItemButton, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { token } from '../../../theme';
import { mockDataTeam } from '../../../data/mockdata';
import Header from '../../../components/global/Header';
import SideBar from '../global/SideBar';
import Topbar from '../global/Topbar';
import axiosInstance from '../../../helpers/axios';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../AppStore/store';
import { UserState } from '../../../AppStore/slices/UserSlice';

const Categories = () => {
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  const [cats, setCats] = useState(null);
  //get all customers from the database
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get('/categories', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setCats(data.Categories);
      } catch (err: any) {
        alert(err.response.data.message);
      }
    })();
  }, [user.token]);
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Category Name',
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
      field: 'img',
      headerName: 'Image',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'parentId',
      headerName: 'Parent Id',
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
        <Header title='CATEGORIES' subTitle='All Product Categories' />
        <ListItemButton
          onClick={() => navigate('/admin/newCategory')}
          sx={{ color: colors.greenAscent[500] }}
        >
          Create New
        </ListItemButton>
        {cats ? (
          <Box height='75vh'>
            <DataGrid rows={cats} columns={columns} />
          </Box>
        ) : (
          <h1>No Categories</h1>
        )}
      </Box>
    </Box>
  );
};
export default Categories;
