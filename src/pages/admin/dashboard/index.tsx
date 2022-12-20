import { Box } from '@mui/material';
import React from 'react';
import Header from '../../../components/global/Header';
import SideBar from '../global/SideBar';
import Topbar from '../global/Topbar';

const AdminDashboard = () => {
  return (
    <Box m='20px' display='flex'>
      <SideBar />
      <Box>
        <Topbar />
        <Header title='DASHBOARD' subTitle='Welcome to your dashboard' />
      </Box>
    </Box>
  );
};
export default AdminDashboard;
