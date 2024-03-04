import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";

const Layout = () => {
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={mainStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;