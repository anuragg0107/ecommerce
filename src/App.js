import React from 'react';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import Error from './pages/Error/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import SingleProductPage from './pages/SingleProduct/SingleProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignupPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/Checkout' element={<CheckoutPage />} />
        <Route path='Singleproduct' element={<SingleProductPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
