import React, { useEffect, useState } from 'react';

const Navbar = () => {

  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]'); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 1.0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);


  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center gap-2 px-2 py-2 rounded-full shadow-lg bg-white/0 backdrop-blur-md border border-gray-200">
        
        <a
          className={`btn-nav ${activeSection === 'Home' ? 'bg-secondary' : ''}`}
          href="#Home"
        >
          <img className="btn-nav-icon" src="./home.svg" alt="Home" />
        </a>

        <a
          className={`btn-nav ${activeSection === 'About' ? 'bg-secondary' : ''}`}
          href="#About"
        >
          <img className="btn-nav-icon" src="./user.svg" alt="User" />
        </a>

        <a
          className={`btn-nav ${activeSection === 'Portfolio' ? 'bg-secondary' : ''}`}
          href="#Portfolio"
        >
          <img className="btn-nav-icon" src="./briefcase.svg" alt="Work" />
        </a>

        <a
          className={`btn-nav ${activeSection === 'Contact' ? 'bg-secondary' : ''}`}
          href="#Contact"
        >
          <img className="btn-nav-icon" src="./paper-plane.svg" alt="Contact" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
