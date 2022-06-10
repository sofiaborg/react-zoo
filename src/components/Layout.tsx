import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./pages/Navigation";
import { Footer } from "./pages/Footer";

export const Layout = () => {
  return (
    <div>
      <header>
        {" "}
        <Navigation />
      </header>
      <section>
        <main>
          <Outlet></Outlet>
        </main>
      </section>
      <Footer></Footer>
    </div>
  );
};
