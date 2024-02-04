import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

export default function layouts() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}
