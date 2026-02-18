import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <header>
        <Navbar />
      </header>

      {/* Main content in between */}
      <main className="flex-grow">{children}</main>

      {/* Footer at the bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
