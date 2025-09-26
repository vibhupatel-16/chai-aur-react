import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />   {/* 👈 All child pages render here */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
