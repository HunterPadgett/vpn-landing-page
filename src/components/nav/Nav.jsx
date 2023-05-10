import { useState, useEffect } from "react";
import "./nav.css";

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 50 ? "#fff" : "#f9f8f2",
    // add any other styles you want to apply to the navbar here
  };

  return (
    <div>
      <nav
        style={navbarStyle}
        className=" text-black fixed w-full z-20 top-0 left-0  "
      >
        <div
          style={navbarStyle}
          className="heroBg max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-5 py-6"
        >
          <a href="#" style={navbarStyle} className="heroBg flex items-center">
            <img
              style={navbarStyle}
              src="/expressvpn-logo-red.svg"
              className="heroBg h-8 lg:h-10 mr-3"
              alt=" Logo"
            />
          </a>
          <div style={navbarStyle} className="heroBg flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              style={navbarStyle}
              className="heroBg inline-flex items-center  text-sm text-black"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.9}
                stroke="currentColor"
                className="heroBg w-6 h-6"
                style={navbarStyle}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </button>
            <span
              style={navbarStyle}
              className="heroBg text-black text-sm hidden font-semibold p-2 text-center mr-3 md:mr-0 lg:block"
            >
              English
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
