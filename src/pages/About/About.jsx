import React, { useState } from "react";
import Sidebar from "./AboutSidebar"; // Import Sidebar Component
import Bio from "./Bio";
import Interests from "./Interests";
import Ten from "./Ten";
import Twelve from "./Twelve";
import Btech from "./Btech";

const About = () => {
  const [activeSection, setActiveSection] = useState("about"); // State to manage content display

  return (
    <div className="bg-primary flex min-h-[calc(100vh-55px)] xs:flex-col lg:flex-row lg:flex-nowrap">
      {/* Sidebar Component */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="w-full h-full">
        <h1 className="text-white xs:hidden lg:flex pl-2 font-FiraRegular gap-2 items-center py-2 h-[41px] relative border-b border-r border-r-border-color cursor-pointer border-b-border-color">
          Personal-info
          <span className="h-full bg-border-color w-[1px] absolute left-44"></span>
        </h1>

        <div className="w-full h-full flex font-FiraCode">
          <div className="xs:w-full text-slate-400 lg:pl-[50px] px-3 h-full  border-r border-r-border-color justify-center pt-8 flex flex-col">
            {activeSection === "about" && <Bio />}

            {activeSection === "interests" && <Interests />}

            {activeSection === "Ten" && <Ten />}

            {activeSection === "Twelve" && <Twelve />}

            {activeSection === "BTECH" && <Btech />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
