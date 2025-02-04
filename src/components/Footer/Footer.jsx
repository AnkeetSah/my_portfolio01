import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex lg:px-3 border-t border-border-color  absolute bottom-0   h-[50px] bg-primary text-text_primary w-full items-center justify-between">
      <div className=" h-full ">
        <ul className="flex items-center h-full">
          <li className="py-2 border-r border-border-color   lg:w-[100px] h-full xs:pl-3 lg:pl-0 pr-3 flex items-center font-semibold xs:justify-center lg:justify-start   ">find me in:</li>
          <li className="h-full border-r border-border-color w-[60px] flex justify-center items-center">
            <FaTwitter className=" text-[20px] " />
          </li>
        </ul>
      </div>
      <div className=" flex items-center xs:justify-center pl-3  lg:gap-2 font-semibold border-l xs:w-[52px] lg:w-auto border-border-color h-full">
       <span className="xs:hidden lg:flex">@AnkeetSah</span> <IoLogoGithub className="xs:text-2xl" />
      </div>
    </div>
  );
};

export default Footer;
