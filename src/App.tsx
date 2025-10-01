// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfferPage from './pages/OfferPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/offer/:id' element={<OfferPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
