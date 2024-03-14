import React, { FunctionComponent, ReactNode } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import { ThemeProvider } from "../providers/themeProviders";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import CustomHead from "../head";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CustomHead />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <NavBar />
        <main
          className={`min-w-screen relative flex min-h-screen flex-col items-center justify-center bg-black text-white`}>
          {children}
        </main>
        <Footer />
        <ToastContainer pauseOnFocusLoss={false} />
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default Layout;
