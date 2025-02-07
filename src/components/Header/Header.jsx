import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdDesktop, IoMdMenu, IoMdClose } from "react-icons/io";
import gsap from "gsap";

const nav_links = [
  { path: "/", display: "_hello" },
  { path: "/about", display: "_about-me" },
  { path: "/projects", display: "_projects" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation(); // Track the current route

  const linksRef = useRef([]);
  const firstLiRef = useRef(null); // Reference for the "ankeet-kumar-sah" <li>
  const contactRef = useRef(null); // Reference for the "Contact Me" <li>
  const menuUl = useRef(null);

  useEffect(() => {
    // GSAP animation for the "ankeet-kumar-sah" <li> and all <Link> elements
    gsap.fromTo(
      [firstLiRef.current, ...linksRef.current, contactRef.current],
      {
        y: -50, // Start position: from 50px above
        opacity: 0, // Start with opacity 0
      },
      {
        y: 0, // End position: current position
        opacity: 1, // Fade in to full opacity
        duration: 1, // Duration of the animation
        ease: "power4.out", // Easing function for a smooth effect
        stagger: 0.1, // Staggering animation for each <Link> element
      }
    );
  }, []); // Empty dependency array to run the animation once on mount

  useEffect(() => {
    if (menu) {
      gsap.fromTo(
        menuUl.current,
        {
          x: "-100%", // Start position: off-screen to the left
        },
        {
          x: "0%", // End position: original position
          duration: 0.7,
          ease: "power4.out",
        }
      );
    }
  }, [menu]);

  return (
    <>
      <header>
        <nav className="flex justify-between items-center h-[55px] px-3 border-b-2 border-[#506f8f] bg-primary">
          {/* Left Section - Branding */}
          <ul className="flex items-center h-full w-full">
            <li className="lg:border-r-2 h-full border-[#506f8f] text-text_primary font-semibold flex items-center xs:w-[90%] xs:text-[20px] lg:w-[280px]">
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
                className={`xs:hidden lg:flex text-text_primary font-semibold border-r-2 h-full border-[#506f8f] flex justify-center items-center w-[125px] ${
                  location.pathname === item.path ? "border-b-[#FEA55F] border-b-4" : ""
                }`}
              >
                <Link to={item.path} ref={(el) => (linksRef.current[index] = el)}>
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Me Section for Desktop */}
          <ul className="h-full flex items-center">
            <li
              className={`xs:hidden lg:flex border-l-2 h-full text-text_primary font-semibold border-[#506f8f] flex justify-center items-center w-[120px] ${
                location.pathname === "/contact" ? "border-red-500" : ""
              }`}
            >
              <Link to="/contact" ref={contactRef}>
                _contact-me
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menu && (
          <ul
            ref={menuUl}
            className="lg:hidden absolute top-[55px] left-0 w-full h-[81vh] bg-primary z-50"
          >
            {nav_links.map((item, index) => (
              <li
                key={index}
                className={`text-white font-semibold border-b h-[50px] pl-4 border-[#506f8f] flex items-center ${
                 location.pathname === item.path ? "border-b-[#FEA55F] border-b-4" : ""
                }`}
              >
                <Link to={item.path} onClick={() => setMenu(false)}>
                  {item.display}
                </Link>
              </li>
            ))}
            <li
              className={`lg:hidden text-white font-semibold border-b h-[50px] pl-4 border-[#506f8f] flex items-center ${
                location.pathname === "/contact" ? "border-red-500" : ""
              }`}
            >
              <Link to="/contact" onClick={() => setMenu(false)}>
                _contact-me
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
