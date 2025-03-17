import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GraduationCap, Medal, Volleyball, FlaskConical, Users } from "lucide-react";

const Twelve = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col xs:items-start lg:items-center text-white px-6 min-h-screen"
    >
      {/* Education Section */}
      <h1 className="text-4xl font-bold text-white mb-4 lg:text-center xs:text-left flex items-center gap-2">
        <GraduationCap size={36} /> Education
      </h1>
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-lg lg:text-center xs:text-left">
        <h2 className="text-2xl font-semibold text-slate-300">
          Nirmala English School
        </h2>
        <p className="text-slate-400">Rajgangpur, Odisha (ISC Board)</p>
        <p className="text-xl font-semibold text-white mt-3">
          Higher Secondary: 88.25% (Completed in 2020)
        </p>
        <p className="text-slate-400 mt-2">Science Stream</p>
      </div>

      {/* Highlights Section */}
      <h1 className="text-4xl font-bold text-white mt-8 lg:text-center xs:text-left flex items-center gap-2">
        <Medal size={36} /> Highlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Users size={24} className="text-slate-300" />
          <p className="text-slate-300">House Vice Lead</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Volleyball size={24} className="text-slate-300" />
          <p className="text-slate-300">Volleyball Team Captain</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Medal size={24} className="text-slate-300" />
          <p className="text-slate-300">Strong in Sports & Academics</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <FlaskConical size={24} className="text-slate-300" />
          <p className="text-slate-300">Passionate about Science</p>
        </div>
      </div>
    </div>
  );
};

export default Twelve;
