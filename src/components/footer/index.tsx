import { siteMetadata } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-10 flex-col justify-center w-full items-center bg-gradient-to-b from-navbar to-rose-950">
      <div className="text-white">Made with ❤️ by Weebs
      </div>
    </footer>);
};

export default Footer;
