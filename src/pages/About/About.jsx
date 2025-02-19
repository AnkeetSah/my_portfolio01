import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { IoMail, IoCall } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaFolder } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";

const About = () => {
  const [dropdown, setDropdown] = useState(false);
  const [educationShow, setEducationShow] = useState(false);

  return (
    <div className="bg-primary flex min-h-[calc(100vh-55px)] xs:flex-col lg:flex-row lg:flex-nowrap">
      {/* Sidebar Section */}
      <h1 className="text-white lg:hidden w-full pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative border-b border-r border-r-border-color cursor-pointer border-b-border-color">
        About Me
      </h1>

      <div className="xs:w-full lg:w-[370px] border-r border-r-border-color">
        <h1
          onClick={() => setDropdown(!dropdown)}
          className="text-white flex pl-2 font-FiraRegular gap-2 items-center py-2 border-b cursor-pointer border-b-border-color"
        >
          {dropdown ? (
            <IoMdArrowDropdown className="text-2xl" />
          ) : (
            <IoMdArrowDropright className="text-2xl" />
          )}
          Personal-info
        </h1>

        {/* Contact Details */}
        {dropdown && (
          <div className="border-b border-b-border-color pl-3 flex flex-col py-3 space-y-2">
            <h1 className="text-text_primary flex font-FiraRegular gap-2 items-center cursor-pointer">
              <FaAngleRight className="text-xl" />
              <FaFolder className="text-xl text-[#E99287]" /> bio
            </h1>
            <h1 className="text-text_primary flex font-FiraRegular gap-2 items-center cursor-pointer">
              <FaAngleRight className="text-xl" />
              <FaFolder className="text-xl text-[#43D9AD]" /> interests
            </h1>
            <h1
              className="text-text_primary flex font-FiraRegular gap-2 items-center cursor-pointer"
              onClick={() => setEducationShow(!educationShow)}
            >
              <FaAngleRight className="text-xl" />
              <FaFolder className="text-xl text-[#3A49A4] cursor-pointer" /> education
            </h1>

            {educationShow && (
              <div className="font-semibold pl-7 pb-4 pt-1">
                <h1 className="text-text_primary flex font-FiraRegular mb-2 gap-2 items-center cursor-pointer">
                  <LuNotebookText className="text-[20px] text-[#81A1C1] cursor-pointer" /> 10th
                </h1>
                <h1 className="text-text_primary flex mb-2 font-FiraRegular gap-2 items-center cursor-pointer">
                  <LuNotebookText className="text-[20px] text-[#81A1C1] cursor-pointer" /> 12th
                </h1>
                <h1 className="text-text_primary flex mb-2 font-FiraRegular gap-2 items-center cursor-pointer">
                  <LuNotebookText className="text-[20px] text-[#81A1C1] " /> BTECH
                </h1>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full h-full">
        <h1 className="text-white xs:hidden lg:flex pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative border-b border-r border-r-border-color cursor-pointer border-b-border-color">
          Personal-info
          <span className="h-full bg-border-color w-[1px] absolute left-44"></span>
        </h1>

        <div className="w-full h-full flex font-FiraCode">
          <div className="xs:w-full h-full border-r border-r-border-color justify-center pt-16 flex">
            kljkjlhjhjl
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
