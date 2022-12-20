import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { token } from '../../../theme';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';

import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';

const Item = (props: {
  title: string;
  to: string;
  icon: any;
  selected: string;
  setSelected: any;
}) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Link to={props.to}>
      <MenuItem
        active={props.selected === props.title}
        style={{ color: colors.grey[500] }}
        onClick={() => props.setSelected(props.title)}
        icon={props.icon}
      >
        <Typography>{props.title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        //background: 'red !important',
        '& .ps-sidebar-container': {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-menu-label:hover': {
          color: '#6870fa !important',
        },
      }}
    >
      <Sidebar
        defaultCollapsed={isCollapsed}
        style={{ background: colors.primary[900] }}
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[500],
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography variant='h5' color={colors.grey[500]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{ color: colors.grey[500] }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  src={`../../assets/user.jpg`}
                  width='100px'
                  height='100px'
                  style={{ borderRadius: '50%', cursor: 'pointer' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h5'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  Paulson
                </Typography>
                <Typography
                  variant='h6'
                  color={colors.greenAscent[500]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  CEO ShopEarn
                </Typography>
              </Box>
            </Box>
          )}
          {/*Menu items */}
          <Box paddingLeft={isCollapsed ? undefined : '-10%'}>
            <Item
              title='Dashboard'
              to='/admin'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 10px 5px 10px' }}
            >
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='/admin/team'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Customers'
              to='/admin/customers'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Orders'
              to='/admin/orders'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 10px 5px 10px' }}
            >
              Pages
            </Typography>
            <Item
              title='Categories'
              to='/admin/categories'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Products'
              to='/admin/products'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Banner Ads'
              to='/banner'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Raffle Draw'
              to='/raffledraw'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Breakfast'
              to='/breakfast'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Best Deals Of Today'
              to='/bestdeals'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Seasonal Products'
              to='/seasonal'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 10px 5px 10px' }}
            >
              Charts
            </Typography>
            <Item
              title='Bar Chart'
              to='/bar'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Pie Chart'
              to='/pie'
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Line Chart'
              to='/line'
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Geography Chart'
              to='/geo'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
