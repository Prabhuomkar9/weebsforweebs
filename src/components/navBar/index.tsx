import React from "react";
import MobileNavBar from "./mobilNavBar";

const NavBar = () => {
  return (
    <>
      <nav className="hidden md:flex w-full">this is laptop navbar
      </nav>
      <MobileNavBar />
    </>
  );
};

export default NavBar;
