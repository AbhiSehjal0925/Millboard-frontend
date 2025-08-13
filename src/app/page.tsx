"use client";

import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import "./globals.css";
import ThankYouPage from './pages/ThankYouPage';
import DecorPage from './pages/DecorPage';
import Basket from './pages/BasketPage';
import OrderPage from './pages/OrderPage';
import ShowroomsPage from './pages/ShowroomsPage';
import BlogPage from './pages/BlogPage';

const Page = () => {
  const [route, setRoute] = useState("home");

  const handleNavigate = (newRoute: string) => {
    setRoute(newRoute);
  };


  return (
    <div>
      <MainNav
        onNavigate={handleNavigate}
        current={route}
      />
      {route === "home" && <HomePage />}
      {route === "product" && <ProductPage />}
      {route === "decor" && <DecorPage />}
      {route === "thankyou" && <ThankYouPage />}
      {route === "basket" && <Basket />}
      {route === "order" && <OrderPage onNavigate={handleNavigate} />}
      {route === "showrooms" && <ShowroomsPage />}
      {route === "blogs" && <BlogPage />}
      <Footer />
    </div>
  );
}

export default Page;