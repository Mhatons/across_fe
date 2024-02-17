import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom/dist';
import Pool from './pages/pool';
import Airdrop from './pages/airdrop';
import Rewards from './pages/rewards';
import Transactions from './pages/transactions';
import PostProvider from './MyContext';
import AdminDashboard from './admin/pages';
import Login from './admin/pages/login';
import { Home } from './pages/home';
import { Bridge } from './pages/bridge';
import Register from './admin/pages/register';
import Balance from './admin/pages/bal';

const isAuthenticated = () => {
  const user = localStorage.getItem('adminData');
  return !!user;
}

const AuthenticatedRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to={"/login"} />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'>
          <Route element={<Home />} path='/' />
          <Route element={<Bridge />} path='/bridge' />
          <Route element={<Pool />} path='/pool' />
          <Route element={<Airdrop />} path='/airdrop' />
          <Route element={<Rewards />} path='/rewards' />
          <Route element={<Transactions />} path='/transactions' />
        </Route>
      </Routes>
      <Routes>
        {/* <Route element={<AdminDashboard />} path='/admin' /> */}
        <Route path='/admin' element={<AuthenticatedRoute element={<AdminDashboard />} />} />
        <Route path='/bal/balance' element={<AuthenticatedRoute element={<Balance />} />} />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/create' />
      </Routes>
    </BrowserRouter>
  </PostProvider>
);