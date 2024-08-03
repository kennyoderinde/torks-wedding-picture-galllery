import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const NavigationDesktop = ({ navLinks }) => {
  const [showSubMenu, setShowSubMenu] = useState([]);
  const [activeItem, setActiveItem] = useState(null)

  const handleClick = (path) => {
    setActiveItem(path);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };

  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <nav className="w-full">
      <ul className=' main-nav lg:flex md:flex grid sm:-space-y-0 space-y-3 list-none sm:w-61 md:w-lg:justify-stretch lg:space-x-6 sm:p-10 sm:pl-4 lg:-ml-10 md:ml-32 '>
        {navLinks.map((el, i) => {
          if (!el.children) {
            const isActive = activeItem === el.path;
            return (
              <li key={i}>
                <Link
                  to={el.path}
                  className={`header-nav-link sm:flex no-underline sm:h-16 sm:w-36 self-center lg:justify-center text-start  sm:items-center hover:text-[#f59898]  ${
                    isActive ? 'text-[#f59898]' : 'text-white'
                  }`}
                  onClick={() => handleClick(el.path)}
                >
                  <span className={`whitespace-nowrap block font-quicksand font-semibold sm:text-base md:text-xl lg:text-lg hover:text-[#f59898] ${
                    isActive ? 'text-[#f59898]' : 'text-white'
                  }`}>
                    {el.name}
                  </span>
                </Link>
              </li>
            );
            
          }

          return (
            <li
              onMouseEnter={() => subMenuOnMouseEnterHandler(i)}
              onMouseLeave={() => subMenuOnMouseLeaveHandler(i)}
              key={i}
              
              className='header-nav-options options-hover relative sm:flex items-center cursor-pointer font-quicksand sm:h-16 sm:mt-3 text-[white] hover:text-[#f59898] '
            >
              <div className='header-nav-div text-[#090c13] sm:h-full bg-none sm:flex flex sm:justify-center  sm:w-28 w-44 cursor-pointer font-quicksand font-semibold group sm:space-x-2 whitespace-nowrap'>
                <span className=" self-center cursor-pointer font-quicksand w-8 h-6 sm:mt-3 mt-2  text-[white] text-center group-hover:text-[#f59898]">{el.icon1}</span>
                <span className=" self-center cursor-pointer font-quicksand sm:h-16 sm:mt-10 text-[white] whitespace-nowrap lg:text-lg md:text-xl  text-center group-hover:text-[#f59898]">{el.name}</span>
                <span className=" self-center cursor-pointer font-quicksand w-8 h-6 sm:mt-2 mt-1 ml-4  text-[white] text-center group-hover:text-[#f59898]">{el.icon}</span>
              </div>
              <motion.ul
                variants={variants}
                animate={showSubMenu[i] ? "open" : "closed"}
                className='header-nav-ul pt-3 absolute top-full z-30 w-full  list-none sm:w-36'
              >
                {showSubMenu[i] &&
                  el.children.map((ele, index) => {
                    if (!ele.children) {
                      return (
                        <li 
                        key={index} 
                        className=' sub-menu-li w-full h-8 lg:w-52 lg:h-7 md:w-72 md:h-11 md:text-xl lg:text-base bg-black sm:bg-[black] shadow-md rounded-md hover:text-[#f59898]'>
                          <a
                            href='#'
                            className='sub-menu-link sm:flex items-center pl-4 sm:w-full sm:h-full text-[white] font-quicksand font-semibold  '
                            style={{ textDecoration: "none" }}
                            onClick={() => {window.location.pathname = ele.path}}
                          >
                            <span className="hover:text-[#f59898] font ">{ele.name}</span>
                          </a>
                        </li>
                      );
                    }

                  })}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
