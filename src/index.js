import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import { Home } from './pages/home';
import Pool from './pages/pool';
import Airdrop from './pages/airdrop';
import Rewards from './pages/rewards';
import Transactions from './pages/transactions';
import PostProvider from './MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <PostProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'>
          <Route element={<Home />} path='/' />
          <Route element={<Pool />} path='/pool' />
          <Route element={<Airdrop />} path='/airdrop' />
          <Route element={<Rewards />} path='/rewards' />
          <Route element={<Transactions />} path='/transactions' />
        </Route>
      </Routes>
    </BrowserRouter>
  </PostProvider>
);


