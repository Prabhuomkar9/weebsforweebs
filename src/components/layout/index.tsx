import React, { FunctionComponent, ReactNode } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import CustomHead from "../head";


const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CustomHead />
      <NavBar />
      <main
        className={`min-w-screen relative flex min-h-screen flex-col items-center justify-center text-white`}>
        {children}
      </main>
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} />
      <Analytics />
    </>
  );
};

export default Layout;
