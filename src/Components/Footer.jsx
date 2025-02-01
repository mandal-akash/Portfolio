import React from "react";

import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex items-center space-x-2 my-12 justify-center text-md lg:text-2xl text-neutral-600 text-center font-medium">
      <p>
        <FaRegCopyright />
      </p>
      <p>2025.AKASH KR.ALL RIGHT RESERVED</p>
    </footer>
  );
};

export default Footer;
