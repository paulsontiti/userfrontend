import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserState } from '../../AppStore/slices/UserSlice';
import { useAppSelector } from '../../AppStore/store';
import Header from '../../components/global/Header';
import Topbar from '../../components/global/Topbar';

const Dashboard = () => {
  const navigate = useNavigate();

  //get user from state
  const user = useAppSelector((state: { user: UserState }) => state.user.user);

  //check if user is logged in and redirect to dashboard
  useEffect(() => {
    if (user.token === '') {
      //navigate('/');
    }
  }, [user, navigate]);
  return (
    <Box m='20px' display='flex'>
      <Box>
        <Topbar />
        <Header title='DASHBOARD' subTitle='Welcome to your dashboard' />
      </Box>
      <h1>List of activities</h1>
      <h1>news</h1>
      <h1>actions</h1>
      <h1>Wallet details top up Wallet benefits of having mone</h1>
      <h1>go to store</h1>
      <h1>go to market</h1>
    </Box>
  );
};
export default Dashboard;
