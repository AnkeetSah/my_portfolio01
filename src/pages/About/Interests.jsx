import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Rocket, Wrench, BrainCircuit, Palette, Lightbulb } from "lucide-react";

const Interests = () => {
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
      <h1 className="text-4xl font-bold text-white mb-4 lg:text-center xs:text-left flex items-center gap-2">
        <Rocket size={36} /> Interests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Rocket size={24} className="text-slate-300" />
          <p className="text-slate-300">Exploring new technologies and frameworks</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Wrench size={24} className="text-slate-300" />
          <p className="text-slate-300">Building IoT projects with ESP32</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <BrainCircuit size={24} className="text-slate-300" />
          <p className="text-slate-300">Experimenting with AI/ML models</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Palette size={24} className="text-slate-300" />
          <p className="text-slate-300">Designing intuitive UI/UX experiences</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow-md lg:text-center xs:text-left flex items-center gap-2">
          <Lightbulb size={24} className="text-slate-300" />
          <p className="text-slate-300">Learning and sharing knowledge through blogs and talks</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;