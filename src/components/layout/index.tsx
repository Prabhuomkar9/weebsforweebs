import React, { FunctionComponent, ReactNode } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import { Analytics } from "@vercel/analytics/react";
import CustomHead from "../head";
import { Toaster } from "../ui/sonner";
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

const Layout: FunctionComponent<{ children: ReactNode, session: Session }> = ({ children, session }) => {
  return (
    <>
      <SessionProvider session={session}>
        <CustomHead />
        <NavBar />
        <main
          className={`mt-24 min-w-screen relative flex min-h-screen flex-col items-center justify-center text-white`}>
          {children}
        </main>
        <Toaster />
        <Footer />
        <Analytics />
      </SessionProvider>
    </>
  );
};

export default Layout;
