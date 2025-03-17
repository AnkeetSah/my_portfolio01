import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Bio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center xs:items-start lg:items-center text-white px-6 rounded-xl shadow-xl max-w-2xl mx-auto text-center xs:text-left lg:text-center xs:min-h-[calc(100vh-55px)] lg:min-h-[calc(100vh-115px)]"
    >
      <h1 className="text-5xl font-bold text-center font-inter text-border-color mb-4">
        About Me
      </h1>
      <h3 className="text-xl text-gray-300 font-semibold mb-2">
        Web Developer | IoT Enthusiast | AI/ML Innovator
      </h3>
      <p className="text-lg text-gray-400 leading-relaxed">
        Hey there! I’m <span className="text-border-color font-semibold">Ankeet Kumar Sah</span>, 
        a passionate full-stack developer with a deep interest in web development, IoT, and AI/ML.
      </p>
      <p className="text-lg text-gray-400 mt-3">
        I love building modern, responsive, and scalable applications that solve real-world problems.
      </p>
      <p className="text-lg text-gray-400 mt-3">
        Constantly exploring new technologies, problem-solving, and pushing boundaries to innovate.
      </p>
      <p className="text-lg text-gray-400 mt-3">
        Let’s connect and build something amazing together! 🚀
      </p>

      {/* Contact Info */}
      <div className="mt-6 text-lg text-gray-300">
        <p>📩 Email: <span className="text-green-300">[Your Email]</span></p>
        <p>🔗 GitHub: <a href="#" className="text-blue-400 hover:underline">[Your GitHub]</a></p>
        <p>🌐 Portfolio: <a href="#" className="text-blue-400 hover:underline">[Your Website]</a></p>
      </div>
    </div>
  );
};

export default Bio;
