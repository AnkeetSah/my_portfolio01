import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { IoMail, IoCall } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";

import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import MainProjects from './MainProjects';

const Projects = () => {
  const [dropdown, setDropdown] = useState(false);
  
  const skills = [
    { icon: <RiReactjsFill className='text-[#607B96] text-2xl mr-1' />, skill: 'React' },
    { icon: <FaHtml5 className='text-[#607B96] text-2xl mr-1' />, skill: 'HTML' },
    { icon: <FaCss3Alt  className='text-[#607B96] text-2xl mr-1' />, skill: 'CSS' },
    { icon: <FaNodeJs className='text-[#607B96] text-2xl mr-1' />, skill: 'JS' },
   
  ];
  return (
    <div className="bg-primary flex min-h-[calc(100vh-55px)] xs:flex-col lg:flex-row lg:flex-nowrap">
      {/* Sidebar Section */}
      <h1   className="text-white lg:hidden w-full pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative   border-b border-r border-r-border-color cursor-pointer border-b-border-color" >
          
      // Project / all 

        </h1>
      <div className="xs:w-full lg:w-[370px]  border-r border-r-border-color">
        <h1 
          onClick={() => setDropdown(!dropdown)} 
          className="text-white flex pl-2 font-FiraRegular gap-2 items-center py-2 border-b cursor-pointer border-b-border-color"
        >
          {dropdown ? <IoMdArrowDropdown className="text-2xl" /> : <IoMdArrowDropright className="text-2xl" />}
          Projects
        </h1>

        {/* Contact Details */}
        {dropdown && (
          <div className="border-b border-b-border-color pl-3 flex flex-col py-3 space-y-2">
           
           {skills.map((elements) => (
              <div className='flex  items-center'>
              <input type="checkbox" class="w-5 h-5 text-green-500 accent-[#607B96] rounded cursor-pointer mr-3" />
              {elements.icon} 
              <h1 className="text-text_primary flex font-FiraRegular gap-2 items-center ">{elements.skill}</h1>
            
              </div>
))}

          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full xs:pb-20 lg:pb-0  ">
      <h1 
         
          className="text-white xs:hidden lg:flex pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative   border-b border-r border-r-border-color cursor-pointer border-b-border-color"
        >
          
          // Project / all <span className="h-full bg-border-color w-[1px] absolute left-44"></span>

        </h1>

        <MainProjects/>
      
      </div>

    </div>
  );
};

export default Projects;
