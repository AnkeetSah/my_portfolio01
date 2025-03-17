import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { FaFolder, FaAngleRight } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";

const Sidebar = ({ setActiveSection, activeSection }) => {
  const [dropdown, setDropdown] = useState(false);
  const [educationShow, setEducationShow] = useState(false);

  return (
    <div className="xs:w-full lg:w-[370px] border-r border-r-border-color">
      <h1
        onClick={() => setDropdown(!dropdown)}
        className="text-white flex pl-2 font-FiraRegular gap-2 items-center py-2 border-b cursor-pointer border-b-border-color"
      >
        {dropdown ? <IoMdArrowDropdown className="text-2xl" /> : <IoMdArrowDropright className="text-2xl" />}
        Personal-info
      </h1>

      {dropdown && (
        <div className="border-b border-b-border-color pl-3 flex flex-col py-3 space-y-2">
          <h1
            className={`flex font-FiraRegular gap-2 items-center cursor-pointer ${
              activeSection === "about" ? "text-white" : "text-text_primary"
            }`}
            onClick={() => setActiveSection("about")}
          >
            <FaAngleRight className="text-xl" />
            <FaFolder className="text-xl text-[#E99287]" /> bio
          </h1>
          <h1
            className={`flex font-FiraRegular gap-2 items-center cursor-pointer ${
              activeSection === "interests" ? "text-white" : "text-text_primary"
            }`}
            onClick={() => setActiveSection("interests")}
          >
            <FaAngleRight className="text-xl" />
            <FaFolder className="text-xl text-[#43D9AD]" /> interests
          </h1>
          <h1
            className={`flex font-FiraRegular gap-2 items-center cursor-pointer ${
              activeSection === "education" ? "text-white" : "text-text_primary"
            }`}
            onClick={() => setEducationShow(!educationShow)}
          >
            <FaAngleRight className="text-xl" />
            <FaFolder className="text-xl text-[#3A49A4]" /> education
          </h1>

          {educationShow && (
            <div className="font-semibold pl-7 pb-4 pt-1">
              <h1
                className={`flex font-FiraRegular mb-2 gap-2 items-center cursor-pointer ${
                  activeSection === "Ten" ? "text-white" : "text-text_primary"
                }`}
                onClick={() => setActiveSection("Ten")}
              >
                <LuNotebookText className="text-[20px] text-[#81A1C1]" /> 10th
              </h1>
              <h1
                className={`flex font-FiraRegular mb-2 gap-2 items-center cursor-pointer ${
                  activeSection === "Twelve" ? "text-white" : "text-text_primary"
                }`}
                onClick={() => setActiveSection("Twelve")}
              >
                <LuNotebookText className="text-[20px] text-[#81A1C1]" /> 12th
              </h1>
              <h1
                className={`flex font-FiraRegular mb-2 gap-2 items-center cursor-pointer ${
                  activeSection === "BTECH" ? "text-white" : "text-text_primary"
                }`}
                onClick={() => setActiveSection("BTECH")}
              >
                <LuNotebookText className="text-[20px] text-[#81A1C1]" /> BTECH
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
