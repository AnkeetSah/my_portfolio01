import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGreaterThan } from "react-icons/fa";

const roles = ["Front-end Developer", "UI/UX Designer", "React Enthusiast"];

const Home = () => {
  const profileref = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (profileref.current) {
      gsap.fromTo(
        profileref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = 1000;

    const type = () => {
      if (isDeleting) {
        setText((prev) => currentRole.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentRole.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
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
        <div className='xs:w-[80%]'>
          <p className='text-white'>Hi all. I am</p>
          <h2 className='text-6xl font-bold text-white'>Ankeet Kumar Sah</h2>
          <h3 className='text-2xl font-semibold flex items-center gap-2 text-[#4D5BCE]'> <FaGreaterThan /> {text}</h3>
        </div>

        <div className='xs:w-[80%]'>
          <p>// complete the game to continue</p>
          <p>// you can also see it on my Github page</p>
          <p>const githubLink = “https://github.com/example/url”</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="h-full xs:hidden w-[40%] lg:flex justify-center items-center">
        <img className="h-[440px]" ref={profileref} src="/assests/images/me.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Home;