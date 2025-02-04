import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdDesktop, IoMdMenu, IoMdClose } from "react-icons/io";
import gsap from "gsap";
const nav_links = [
  { path: "/", display: "_hello" },
  { path: "/about", display: "_about-me" },
  { path: "/projects", display: "_projects" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);

  const linksRef = useRef([]);
  const firstLiRef = useRef(null);  // Reference for the "ankeet-kumar-sah" <li>
  const contactRef = useRef(null);  // Reference for the "Contact Me" <li>


  useEffect(() => {
    // GSAP animation for the "ankeet-kumar-sah" <li> and all <Link> elements
    gsap.fromTo(
      [firstLiRef.current, ...linksRef.current, contactRef.current], // Animating both the first <li> and all <Link> elements
      {
        y: -50,    // Start position: from 50px above
        opacity: 0, // Start with opacity 0
      },
      {
        y: 0,      // End position: current position
        opacity: 1, // Fade in to full opacity
        duration: 1, // Duration of the animation
        ease: "power4.out", // Easing function for a smooth effect
        stagger: 0.1, // Staggering animation for each <Link> element
      }
    );
  }, []);// Empty dependency array to run the animation once on mount

  return (
    <>
      <header>
        <nav className="flex justify-between items-center h-[55px] px-3 border-b-2 border-[#506f8f] bg-primary">
          {/* Left Section - Branding */}
          <ul   className="flex items-center h-full w-full">
            <li  className="lg:border-r-2 h-full border-[#506f8f] text-text_primary font-semibold flex items-center xs:w-[90%] xs:text-[20px] lg:w-[280px]">
              <Link ref={firstLiRef}>ankeet-kumar-sah</Link>
            </li>

            {/* Mobile Menu Toggle Icon */}
            <li
              className="lg:hidden text-text_primary font-bold text-2xl cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMdClose /> : <IoMdMenu />}
            </li>

            {/* Desktop Navigation Links */}
            {nav_links.map((item, index) => (
        <li
          key={index}
          className="xs:hidden lg:flex text-text_primary font-semibold border-r-2 h-full border-[#506f8f] flex justify-center items-center w-[125px]"
        >
          <Link
            to={item.path}
            ref={(el) => linksRef.current[index] = el} // Add the reference to each Link element
          >
            {item.display}
          </Link>
        </li>
      ))}
          </ul>

          {/* Contact Me Section for Desktop */}
          <ul className="h-full flex items-center">
            <li className="xs:hidden lg:flex border-l-2 h-full text-text_primary font-semibold border-[#506f8f] flex justify-center items-center w-[120px]">
              <Link to="/contact" ref={contactRef}>_contact-me</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {menu && (
  <ul className="lg:hidden absolute top-[55px] left-0 w-full h-[81vh] bg-primary z-50">
    {nav_links.map((item, index) => (
      <li
        key={index}
        className="text-white font-semibold border-b h-[50px] pl-4 border-[#506f8f] flex items-center"
      >
        <Link to={item.path} onClick={() => setMenu(false)}>
          {item.display}
        </Link>
      </li>
      
    ))}
    <li className="lg:hidden text-white font-semibold border-b h-[50px] pl-4 border-[#506f8f] flex items-center">
              <Link to="/contact" onClick={() => setMenu(false)}>_contact-me</Link>
            </li>
  </ul>
)}

    </>
  );
};

export default Header;
