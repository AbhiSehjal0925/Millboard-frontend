"use client";

import React, { useState, useEffect } from 'react';
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
  const [screenWidth, setScreenWidth] = useState(1920);

  // Read the route from URL on first load
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (path) {
      setRoute(path);
    } else {
      setRoute("home");
      // Ensure URL shows root for home page on first load
      if (window.location.pathname !== "/") {
        window.history.replaceState({}, "", "/");
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigate = (newRoute: string) => {
    setRoute(newRoute);
    // Update the URL without reloading the page
    // For home page, show root URL, for other pages show the route name
    if (newRoute === "home") {
      window.history.pushState({}, "", "/");
    } else {
      window.history.pushState({}, "", `/${newRoute}`);
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname.replace("/", "");
      setRoute(path || "home");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const isSmall = screenWidth <= 768;
  // Calculate actual header height: UpperNav (mobile: ~32px, desktop: ~48px) + MainNav (mobile: ~48px, desktop: ~64px)
  const headerHeight = isSmall ? 72 : 112; // Further reduced for small screens to eliminate white space

  return (
    <div style={{ fontFamily: 'Mansfield, sans-serif', width: '100vw', overflowX: 'hidden' }}>
      <MainNav
        onNavigate={handleNavigate}
        current={route}
      />

      {/* Main content with proper top margin */}
      <main style={{
        marginTop: `${headerHeight}px`, // Add margin to account for fixed header
        minHeight: 'calc(100vh - 200px)' // Ensure minimum height
      }}>
        {route === "home" && <HomePage />}
        {route === "product" && <ProductPage />}
        {route === "decor" && <DecorPage />}
        {route === "thankyou" && <ThankYouPage />}
        {route === "basket" && <Basket />}
        {route === "order" && <OrderPage onNavigate={handleNavigate} />}
        {route === "showrooms" && <ShowroomsPage />}
        {route === "blogs" && <BlogPage />}
      </main>

      <Footer />
    </div>
  );
};

export default Page;