import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaGreaterThan } from "react-icons/fa";

const roles = ["Front-end Developer", "UI/UX Designer", "React Enthusiast"];

const Home = () => {
  const nameRef = useRef(null);
  const profileRef = useRef(null);
  const githubTextRef = useRef(null);
  const hiRef = useRef(null);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline();
    const isMobile = window.innerWidth <= 768;

    // Animate "Hi"
    timeline.fromTo(
      hiRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Animate Name
    if (nameRef.current) {
      const nameText = nameRef.current.innerText;
      nameRef.current.innerHTML = "";
      nameText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        nameRef.current.appendChild(span);
      });

      timeline.fromTo(
        nameRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out" }
      );
    }

    // Profile Animation (Non-Mobile)
    if (!isMobile && profileRef.current) {
      timeline.fromTo(
        profileRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power4" }
      );
    }

    // Animate GitHub Text Block
    timeline.fromTo(
      githubTextRef.current?.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = 1000;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <div className="bg-primary min-h-[calc(100vh-104px)] flex justify-center items-center gap-5">
      <div className="lg:h-[400px] xs:min-h-[calc(80vh-134px)] lg:w-[43%] flex flex-col xs:justify-between xs:items-center lg:justify-center gap-10 lg:pl-19">
        <div className="xs:w-[80%]  lg:w-full">
          <p className="text-white font-FiraCode" ref={hiRef}>
            Hi all. I am
          </p>
          <h2 className="text-6xl font-bold text-white font-FiraRegular" ref={nameRef}>
            Ankeet Kumar Sah
          </h2>
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-[#4D5BCE]">
            <FaGreaterThan /> {text}
          </h3>
        </div>

        <div className="xs:w-[80%] lg:w-full" ref={githubTextRef}>
          <p className="text-[#607B96] font-FiraCode">// complete the game to continue</p>
          <p className="text-[#607B96] font-FiraCode">// you can also see it on my GitHub page</p>
          <p className="text-white"><span className="text-[#607B96]">const</span> <span className="text-[#43D9AD]">githubLink</span> = <span className="text-[#E99287]">"https://github.com/example/url"</span> </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="h-full xs:hidden w-[40%] lg:flex justify-center items-center">
        <img
          className="h-[440px]"
          ref={profileRef}
          src="/assests/images/me.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
