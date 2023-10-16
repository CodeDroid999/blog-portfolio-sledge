import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    // Get current year
    const year = new Date().getFullYear();

    // Find the element by ID and set its innerHTML to the year
    const currentYearElement = document.getElementById('currentYear');

    if (currentYearElement) {
      currentYearElement.innerHTML = year.toString();
    }
  }, []); // The empty dependency array makes this effect run only once on component mount

  return (
    <footer className="container-fluid footer_section">
      <p className="text-white">
        &copy; <span id="currentYear"></span> All Rights Reserved.
        <a href="https://www.youtube.com/@SilusSledgeAmbani">
          Sledge Entertainment LTD
        </a>
      </p>
    </footer>
  );
};

export default Footer;
