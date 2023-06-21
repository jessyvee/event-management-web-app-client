import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavExpanded]);

  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            
            <NavLink
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
              to="/"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <button class="button-8" role="button">
              Home
              </button>
            </NavLink>        
          </li>
          <li>
         
            <NavLink 
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
              to="/addevent"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
               <button class="button-8" role="button">
                Upcomming event
              </button>
            </NavLink>
        
          </li>





          {/* <li>
         
         <NavLink 
           style={({ isActive }) => (isActive ? { color: "green" } : {})}
           to="/eventsgrid"
           onClick={() => {
             setIsNavExpanded(false);
           }}
         >
            <button class="button-8" role="button">
             event
           </button>
         </NavLink>
     
       </li> */}






          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
              to="/about"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <button class="button-8" role="button">
              About
            </button>

            </NavLink>
          </li>
          <li>
          
            <NavLink
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
              to="/contact"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <button class="button-8" role="button">
              Contact
              </button>
            </NavLink>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
