import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GraduationCap, Users, Code, Mic, Rocket } from "lucide-react";

const Btech = () => {
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [page]);

  const pages = [
    {
      title: "GIET University, Gunupur",
      subtitle: "📍 Pin: 765022",
      icon: <GraduationCap size={36} className="text-green-400" />,
      details: [
        { text: "🎓 CGPA: 8.8", highlight: true },
        { text: "💡 Passionate about Tech & Problem Solving" },
      ],
    },
    {
      title: "Robotics Club - Technical Lead",
      icon: <Rocket size={36} className="text-green-400" />,
      details: [
        { text: "🚀 Conducted workshops for 100+ students." },
        { text: "🔍 Simplified complex technical concepts." },
      ],
    },
    {
      title: "Web Eye Club - Mentor",
      icon: <Code size={36} className="text-green-400" />,
      details: [
        { text: "💻 Taught HTML, CSS, Git & GitHub to 150+ students." },
        { text: "📢 Shared real-world web development insights." },
      ],
    },
    {
      title: "OB Group - Organizer & Host",
      icon: <Mic size={36} className="text-green-400" />,
      details: [
        { text: "🎭 Managed multiple college events (Farewells, Freshers, etc.)." },
        { text: "🤝 Gained leadership & public speaking skills." },
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-white px-6 min-h-screen"
    >
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-2">
        <GraduationCap size={36} /> B.Tech Journey
      </h1>

      {/* Card Container */}
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <div className="flex justify-center mb-4">{pages[page - 1].icon}</div>
        <h2 className="text-2xl font-semibold text-slate-300">
          {pages[page - 1].title}
        </h2>
        {pages[page - 1].subtitle && (
          <p className="text-slate-400">{pages[page - 1].subtitle}</p>
        )}

        {pages[page - 1].details.map((detail, index) => (
          <p
            key={index}
            className={`mt-3 text-lg ${detail.highlight ? "font-bold text-white" : "text-slate-300"}`}
          >
            {detail.text}
          </p>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-6">
        <button
          className="px-6 py-2 bg-green-500 rounded-lg text-white font-medium hover:bg-green-400 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>
        <span className="text-lg font-medium">{page} / {pages.length}</span>
        <button
          className="px-6 py-2 bg-green-500 rounded-lg text-white font-medium hover:bg-green-400 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          onClick={() => setPage(page + 1)}
          disabled={page === pages.length}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Btech;