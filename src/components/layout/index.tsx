import React, { FunctionComponent, ReactNode } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import { Analytics } from "@vercel/analytics/react";
import CustomHead from "../head";
import { Toaster } from "../ui/sonner";


const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CustomHead />
      <NavBar />
      <main
        className={`mt-24 min-w-screen relative flex min-h-screen flex-col items-center justify-center text-white`}>
        {children}
      </main>
      <Toaster />
      <Footer />
      <Analytics />
    </>
  );
};

export default Layout;
