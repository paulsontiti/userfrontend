import { useContext, useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Drawer,
} from '@mui/material';
import { token, ColorModeContext } from '../../theme';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../AppStore/store';
import { signout, UserState } from '../../AppStore/slices/UserSlice';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Home from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axiosInstance from '../../helpers/axios';

const Item = (props: {
  title: string;
  to: string;
  icon?: any;
  selected: string;
  setSelected: any;
}) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Link to={props.to}>
      <MenuItem
        active={props.selected === props.title}
        style={{ color: colors.primary[300] }}
        onClick={() => props.setSelected(props.title)}
        icon={props.icon}
      >
        <Typography sx={{ ml: '25px', fontSize: '0.6rem' }}>
          {props.title}
        </Typography>
      </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  //mall
  const [isMallOpen, setIsMallOpen] = useState(false);

  //restuarant
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);

  //categorylist
  const [categorylist, setCategoryList] = useState<any>();

  //get user from state
  const state = useAppSelector((state: { user: UserState }) => state);
  const { user } = state.user;

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get(
          '/categories/getCategoriesList'
        );
        setCategoryList(data.categoryList);
      } catch (err: any) {
        console.log(err.response.message);
      }
    })();
  }, []);

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
          <Drawer
            variant='temporary'
            anchor='left'
            open={isRestaurantOpen}
            onClose={() => setIsRestaurantOpen(false)}
            sx={{
              marginTop: '3rem',
            }}
          >
            <Box sx={{ background: colors.primary[500], maxWidth: '70vw' }}>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <IconButton>
                  <MenuBookIcon />
                </IconButton>
                <Typography
                  color={colors.primary[100]}
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  MENU
                </Typography>
              </Box>

              <Box>
                <Typography
                  color={colors.primary[200]}
                  sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                >
                  BREAKFAST
                </Typography>

                <Item
                  title='Bread, Tea & Egg'
                  to=''
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
              <Box>
                <Typography
                  color={colors.primary[200]}
                  sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                >
                  LUNCH
                </Typography>

                <Item
                  title='Bread, Tea & Egg'
                  to=''
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
              <Box>
                <Typography
                  color={colors.primary[200]}
                  sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                >
                  DINNER
                </Typography>

                <Item
                  title='Bread, Tea & Egg'
                  to=''
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
              <Box>
                <Typography
                  color={colors.primary[200]}
                  sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                >
                  RICE
                </Typography>

                <Item
                  title='Bread, Tea & Egg'
                  to=''
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
              <Box>
                <Typography
                  color={colors.primary[200]}
                  sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                >
                  BEANS
                </Typography>

                <Item
                  title='Bread, Tea & Egg'
                  to=''
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
              <Box>
                <Typography
                  color={colors.primary[200]}
                  sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                >
                  SOUP
                </Typography>

                <Item
                  title='Bread, Tea & Egg'
                  to=''
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Box>
          </Drawer>
          <Drawer
            variant='temporary'
            anchor='left'
            open={isMallOpen}
            onClose={() => setIsMallOpen(false)}
            sx={{
              marginTop: '3rem',
            }}
          >
            <Box sx={{ background: colors.primary[500], maxWidth: '70vw' }}>
              <Typography
                color={colors.primary[100]}
                sx={{
                  m: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                SHOPPING MALL
              </Typography>
              {categorylist &&
                categorylist.map((parent: any) => (
                  <Box>
                    <Typography
                      color={colors.primary[200]}
                      sx={{ m: '15px 10px 5px 10px', fontSize: '1rem' }}
                    >
                      {parent.name.toUpperCase()}
                    </Typography>

                    {parent.children &&
                      parent.children.map((child: any) =>
                        child.children ? (
                          <Box>
                            <Typography
                              color={colors.primary[200]}
                              sx={{
                                m: '10px 10px 5px 20px',
                                fontSize: '0.8rem',
                              }}
                            >
                              {child.name.toUpperCase()}
                            </Typography>
                            {child.children.map((grandChild: any) => (
                              <Item
                                title={grandChild.name.toUpperCase()}
                                to={`/${grandChild.slug}`}
                                selected={selected}
                                setSelected={setSelected}
                              />
                            ))}
                          </Box>
                        ) : (
                          <Item
                            title={child.name.toUpperCase()}
                            to={`/${child.slug}`}
                            selected={selected}
                            setSelected={setSelected}
                          />
                        )
                      )}
                  </Box>
                ))}
            </Box>
          </Drawer>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
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
                <Button
                  color='secondary'
                  onClick={() => {
                    dispatch(signout());
                    navigate('/');
                  }}
                >
                  Logout
                </Button>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{ color: colors.grey[500] }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/*Menu items */}
          {!isCollapsed && (
            <Box>
              <Box mb='25px'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <img
                    alt='profile-user'
                    src={`/img/${
                      user.details.dp ? user.details.dp : `user.jpg`
                    }`}
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
                    {user.details.userName}
                  </Typography>
                  <Typography
                    variant='body2'
                    color={colors.greenAscent[500]}
                    fontWeight='bold'
                    sx={{ m: '10px 0 0 0' }}
                  >
                    {user.details.firstName + ' ' + user.details.lastName}
                  </Typography>
                </Box>
              </Box>
              <Item
                title='Dashboard'
                to='/'
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                Settings
              </Typography>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <IconButton
                  onClick={() => {
                    colorMode.toggleColorMode();
                  }}
                >
                  {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon />
                  )}
                </IconButton>

                <IconButton>
                  <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                  <PersonOutlinedIcon />
                </IconButton>
              </Box>
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                Quick Actions
              </Typography>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <IconButton onClick={() => navigate('/')}>
                  <Home />
                </IconButton>
                <IconButton onClick={() => setIsRestaurantOpen(true)}>
                  <RestaurantIcon />
                </IconButton>
                <IconButton onClick={() => setIsMallOpen(true)}>
                  <ShoppingCart />
                </IconButton>

                <IconButton
                  onClick={() => {
                    navigate('/favorite');
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate('/notifications');
                  }}
                >
                  <NotificationsOutlinedIcon />
                </IconButton>
              </Box>
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                My Orders
              </Typography>
              <Item
                title='Manage Your Orders'
                to='/orders'
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Buy Again'
                to='/buyagain'
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title='Return & Replacements'
                to='/return'
                icon={<NotificationsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                My Wallet
              </Typography>
              <Item
                title='Balance'
                to='/balance'
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Top Up'
                to='/topup'
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                Business
              </Typography>
              <Item
                title='Become A Partner'
                to='/business'
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Own A Shop'
                to='/shop'
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Referrals'
                to='/referrals'
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                My Accounts
              </Typography>
              <Item
                title='Business'
                to='/businessaccount'
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Personal'
                to='/personalaccount'
                icon={<ContactsOutlinedIcon />}
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
                title='Profile Update'
                to='/profile'
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='News'
                to='/news'
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title='Jobs'
                to='/jobs'
                icon={<HelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                Activity
              </Typography>
              <Item
                title='Fund Wallet'
                to='/fund'
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Go To Market'
                to='/market'
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Place Order'
                to='/'
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                Gift
              </Typography>
              <Item
                title='Fund Wallet'
                to='/fund'
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Go To Market'
                to='/market'
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Place Order'
                to='/'
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant='h6'
                color={colors.grey[300]}
                sx={{ m: '15px 10px 5px 10px' }}
              >
                Customer Service
              </Typography>
              <Item
                title='Lay A Complaint'
                to='/complaint'
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='Live Chat'
                to='/chat'
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title='FAQ'
                to='/faq'
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
