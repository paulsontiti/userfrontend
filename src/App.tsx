import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Electronics from './pages/productcategories/Electronics';
import Appliances from './pages/productcategories/Appliances';
import Automobile from './pages/productcategories/Automobile';
import Beauty from './pages/productcategories/Beauty';
import Building from './pages/productcategories/Building';
import Fashion from './pages/productcategories/Fashion';
import Food from './pages/productcategories/Food';
import Furniture from './pages/productcategories/Furniture';
import Groceries from './pages/productcategories/Groceries';
import Health from './pages/productcategories/Health';
import Logistics from './pages/productcategories/Logistics';
import MobilePhones from './pages/productcategories/MobilePhones';
import RealEstate from './pages/productcategories/RealEstate';
import Transportation from './pages/productcategories/Transportation';

import Product from './pages/product';
import AdminDashboard from './pages/admin/dashboard';
import Team from './pages/admin/team';
import Customers from './pages/admin/customers';
import Categpries from './pages/admin/categories';
import NewCategory from './pages/admin/categories/NewCategory';
import Products from './pages/admin/products';
import NewProduct from './pages/admin/products/NewProduct';
import CheckOut from './pages/checkout';
import ReviewOrder from './pages/revieworder';
import Order from './pages/order';
import LogRocket from 'logrocket';

function App() {
  const { theme, colorMode } = useMode();
  LogRocket.init('ixsa3i/shopearn');
  // This is an example script - don't forget to change it!
  LogRocket.identify('ixsa3i/shopearn', {
    name: 'Paulson Nwoha',
    email: 'paulsontiti@gmail.com',

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro',
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/admin/team' element={<Team />} />
            <Route path='/admin/customers' element={<Customers />} />
            <Route path='/admin/orders' element={<Customers />} />
            <Route path='/admin/categories' element={<Categpries />} />
            <Route path='/admin/newCategory' element={<NewCategory />} />
            <Route path='/admin/products' element={<Products />} />
            <Route path='/admin/newProduct' element={<NewProduct />} />
            <Route path='/product:name' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/order' element={<Order />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/revieworder' element={<ReviewOrder />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/appliances' element={<Appliances />} />
            <Route path='/automobile' element={<Automobile />} />
            <Route path='/beauty' element={<Beauty />} />
            <Route path='/building' element={<Building />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/food' element={<Food />} />
            <Route path='/grocery' element={<Groceries />} />
            <Route path='/health' element={<Health />} />
            <Route path='/furniture' element={<Furniture />} />
            <Route path='/logistics' element={<Logistics />} />
            <Route path='/mobilephones' element={<MobilePhones />} />
            <Route path='/realestate' element={<RealEstate />} />
            <Route path='/transportation' element={<Transportation />} />
          </Routes>
        </ProSidebarProvider>
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
