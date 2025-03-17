import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Atom, GraduationCap, Trophy, Mic2, FlaskConical } from "lucide-react"; // Sleek Icons

const Ten = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 }, // Start from opacity 0
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // End at opacity 1
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col xs:items-start lg:items-center text-white px-6 min-h-screen"
    >
      {/* Education Section */}
      <h1 className="text-4xl font-bold text-white mb-4 font-FiraRegular lg:text-center xs:text-left flex items-center gap-2">
        <GraduationCap className="text-white" size={32} /> Education
      </h1>
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-lg lg:text-center xs:text-left">
        <h2 className="text-2xl font-semibold text-slate-300">Nirmala English School</h2>
        <p className="text-slate-400">Rajgangpur, Odisha (ICSE Board)</p>
        <p className="text-xl font-semibold text-white mt-3 flex items-center gap-2">
        
          Matriculation: 85% (Completed in 2018)
        </p>
      </div>

      {/* Highlights Section */}
      <h1 className="text-4xl font-bold text-white mt-8 font-FiraRegular lg:text-center xs:text-left flex items-center gap-2">
        <Trophy className="text-white" size={32} /> Highlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-800 p-4 rounded-lg shadow-md flex items-center gap-3 lg:text-center xs:text-left">
          <Atom className="text-white" size={24} />
          <p className="text-slate-300">Strong in Mathematics & Science</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md flex items-center gap-3 lg:text-center xs:text-left">
          <Trophy className="text-white" size={24} />
          <p className="text-slate-300">Represented school in Cricket</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md flex items-center gap-3 lg:text-center xs:text-left">
          <Mic2 className="text-white" size={24} />
          <p className="text-slate-300">Participated in Debates & Quizzes</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md flex items-center gap-3 lg:text-center xs:text-left">
          <FlaskConical className="text-white" size={24} />
          <p className="text-slate-300">Science Exhibitions & Competitions</p>
        </div>
      </div>
    </div>
  );
};

export default Ten;
