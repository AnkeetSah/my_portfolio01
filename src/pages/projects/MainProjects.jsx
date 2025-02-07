import React from "react";
import { FaNodeJs } from "react-icons/fa6";

const MainProjects = () => {
  return (
    <div>
      <div className="projects lg:min-h-[calc(100vh-100px)] h-auto flex justify-center xs:flex-wrap  gap-8 pt-20 px-4 ">
        <div className="project bg-[#011221] w-[320px] h-[260px] rounded-xl relative xs:mb-6 lg:mb-0">
          <h3 className="absolute -top-[33px] text-[#607B96] font-FiraCode -left-1">
            <span className="text-[#5565E8]">Project 1 </span>// _ui-animations
          </h3>
          <div>
            <FaNodeJs className="bg-[#86E1F9] text-[#011221] absolute right-3 top-3 text-3xl p-1 rounded-[3px]" />
            <img
              src="../../../public/assests/images/Rectangle 42.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="pt-4 pl-5">
            <h3 className="text-text_primary">
              Duis aute irure dolor in velit esse cillum dolore.
            </h3>
            <button className="bg-[#1C2B3A] py-1 px-3 text-white font-FiraCode rounded-[5px] mt-3">
              GitHub link
            </button>
          </div>
        </div>
        <div className="project bg-[#011221] w-[320px] h-[260px] rounded-xl relative  xs:mb-6 lg:mb-0">
          <h3 className="absolute -top-[33px] text-[#607B96] font-FiraCode -left-1">
            <span className="text-[#5565E8]">Project 1 </span>// _ui-animations
          </h3>
          <div>
            <FaNodeJs className="bg-[#86E1F9] text-[#011221] absolute right-3 top-3 text-3xl p-1 rounded-[3px]" />

            <img
              src="../../../public/assests/images/Rectangle 42.png"
              className="w-full"
              alt=""
            />
          </div>

          <div className="pt-4 pl-5">
            <h3 className="text-text_primary">
              Duis aute irure dolor in velit esse cillum dolore.
            </h3>
            <button className="bg-[#1C2B3A] py-1 px-3 text-white font-FiraCode rounded-[5px] mt-3">
              GitHub link
            </button>
          </div>
        </div>

        <div className="project bg-[#011221] w-[320px] h-[260px] rounded-xl relative  xs:mb-6 lg:mb-0">
          <h3 className="absolute -top-[33px] text-[#607B96] font-FiraCode -left-1">
            <span className="text-[#5565E8]">Project 1 </span>// _ui-animations
          </h3>
          <div>
            <FaNodeJs className="bg-[#86E1F9] text-[#011221] absolute right-3 top-3 text-3xl p-1 rounded-[3px]" />
            <img
              src="../../../public/assests/images/Rectangle 42.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="pt-4 pl-5">
            <h3 className="text-text_primary">
              Duis aute irure dolor in velit esse cillum dolore.
            </h3>
            <button className="bg-[#1C2B3A] py-1 px-3 text-white font-FiraCode rounded-[5px] mt-3">
              GitHub link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
