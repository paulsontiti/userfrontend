import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { token } from '../../../theme';
import { mockDataTeam } from '../../../data/mockdata';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Header from '../../../components/global/Header';
import SideBar from '../global/SideBar';
import Topbar from '../global/Topbar';
import axiosInstance from '../../../helpers/axios';
import { useAppSelector } from '../../../AppStore/store';
import { UserState } from '../../../AppStore/slices/UserSlice';

const Customers = () => {
  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  const [users, setUsers] = useState(null);
  //get all customers from the database
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get('/users', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUsers(data.users);
      } catch (err: any) {
        alert(err.response.data.message);
      }
    })();
  }, []);

  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const backgroundColor = (role: string) => {
    return role === 'admin' ? colors.greenAscent[600] : colors.greenAscent[900];
  };
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'Last Name',
      headerName: 'Last Name',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'userName',
      headerName: 'Username',
      type: 'number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'contact',
      headerName: 'Phone Number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'createdAt',
      headerName: 'Joined Date',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            sx={{
              width: '60%',
              m: '0 auto',
              p: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              background: backgroundColor(role),
            }}
          >
            {role === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {role === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box display='flex'>
      <SideBar />
      <Box width='100vw'>
        <Topbar />
        <Header title='CUSTOMERS' subTitle='All existing customers' />
        {users ? (
          <Box height='75vh'>
            <DataGrid rows={users} columns={columns} />
          </Box>
        ) : (
          <h1>No Users</h1>
        )}
      </Box>
    </Box>
  );
};
export default Customers;
