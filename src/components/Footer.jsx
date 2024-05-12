import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 hidden items-center bg-white w-full md:flex justify-between">
      <div className="flex gap-1">
        <a
          className="hover:text-primary transition-all duration-200"
          href="https://www.facebook.com/seanj12c/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          className="hover:text-primary transition-all duration-200"
          href="https://github.com/seanj12c"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="flex justify-end">
        <h1 className="text-xs text-right">©Sean Jimwell Buclatin</h1>
      </div>
    </div>
  );
};

export default Footer;
