import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { IoMail, IoCall } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import CodeDisplay from './CodeDisplay';

const Contact = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="bg-primary flex min-h-[calc(100vh-104px)] xs:flex-col lg:flex-row lg:flex-nowrap">
      {/* Sidebar Section */}
      <h1   className="text-white lg:hidden w-full pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative   border-b border-r border-r-border-color cursor-pointer border-b-border-color" >
          
          Contact Me 

        </h1>
      <div className="xs:w-full lg:w-[370px]  border-r border-r-border-color">
        <h1 
          onClick={() => setDropdown(!dropdown)} 
          className="text-white flex pl-2 font-FiraRegular gap-2 items-center py-2 border-b cursor-pointer border-b-border-color"
        >
          {dropdown ? <IoMdArrowDropdown className="text-2xl" /> : <IoMdArrowDropright className="text-2xl" />}
          Contacts
        </h1>

        {/* Contact Details */}
        {dropdown && (
          <div className="border-b border-b-border-color pl-3 flex flex-col py-3 space-y-2">
            <h1 className="text-text_primary flex font-FiraRegular gap-2 items-center">
              <IoMail className="text-xl" /> user@gmail.com
            </h1>
            <h1 className="text-text_primary flex font-FiraRegular gap-2 items-center">
              <IoCall className="text-xl" /> +3598246359
            </h1>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full  ">
      <h1 
         
          className="text-white xs:hidden lg:flex pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative   border-b border-r border-r-border-color cursor-pointer border-b-border-color"
        >
          
          Contact Me <span className="h-full bg-border-color w-[1px] absolute left-44"></span>

        </h1>

        <div className='w-full h-full flex font-FiraCode'>

          <div className=' xs:w-full lg:w-[50%] h-full border-r border-r-border-color justify-center pt-16 flex'>
            <form action="" className='flex flex-col xs:w-[85%] lg:w-[70%]'>
              <label htmlFor="" className='text-text_primary'> _name </label>
              <input className='bg-[#011221] text-white mt-2 p-2 border border-[#546476] rounded-md' type="text" name="" id="" />
              <label className='text-text_primary' htmlFor="">_email</label>
              <input className='bg-[#011221] text-white mt-2 p-2 border border-[#546476] rounded-md'  type="email" name="" id="" />
              <label className='text-text_primary' htmlFor="#">_message</label>
              <textarea  className='bg-[#011221] text-white mt-2 p-2 border border-[#546476] active:border-[#607B96] rounded-md ' rows={5} name="" id=""></textarea>
            </form>
          </div>
         
         <div className='lg:flex xs:hidden justify-center items w-[50%]'>
           <CodeDisplay/>
         </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
