import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Error from "../pages/error";

export const PublicLayout = () => (
  <div className="publicLayoutDefault d-flex flex-column min-vh-100">
    <Navbar />

    <div className="flex-fill px-0">
      <Outlet />
    </div>

    <Footer />
  </div>
);

export function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
