import React from "react";
import Header from "./Header/header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
