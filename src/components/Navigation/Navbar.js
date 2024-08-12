import React, { useState } from "react";
import { Link } from 'react-router-dom';

import NavigationDesktop from "./NavigationDesktop";
import torkLogo from "../../assets/tork-5.png";
// import navLinksData from "./data.js";
import * as BiIcon from "react-icons/bi";
import * as HiIcon from "react-icons/hi";
// import Avatar from "../Navbar/Avatar";

// opening and closing of Navbar page on mobile
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";


function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    {
      name: "",
      path: '/' 
    },
    
    
    {
      name: <span className="sm:ml-0 -ml-8">PhotoGallery</span>,
      path: '/photo-gallery',
      icon: <BiIcon.BiSolidDownArrow />,
      children: [
        {
          name: "PreWedding",
          path: '/pre-wedding' 

        },
        
        {
          name: "Engagement",
          path: '/engagement' 

        },

        {
          name: "Courts",
          path: '/court' 

        },

        {
          name: "Parties And Showers",
          path: '/parties-and-showers' 

        },
        
        {
          name: "Wedding",
          path: '/wedding' 

        },

        {
          name: "Reception",
          path: '/reception' 

        },
        
        
        
      ],

    },
    {
      name: "Blog",
      path: '/blog' ,

    },


    {
      name: "Wedding Program",
      path: '/wedding-program',
      
    },
    
    

    
    {
      name: <span className="sm:-ml-24 -ml-1">Contact</span>,
      path: '/contact' ,
      icon: <BiIcon.BiSolidDownArrow />,
      icon1: <HiIcon.HiOutlineTranslate />,

      children: [
        
        {
          name: <span className=" sm:text-base text-lg">Deutsch <span className=" text-gray-400 text-sm hover:text-[#0AC5A8]">BETA</span></span>,
        },
        {
          name:  <span className=" sm:text-base text-lg"> English US </span>,
        },
        {
          name: <span className=" sm:text-base text-lg"> English UK </span>,
        },
        {
          name: <span className=" sm:text-base text-lg">Espanol <span className=" text-gray-400 text-sm hover:text-[#0AC5A8]">BETA</span></span>,
        },
      ],
    },
   
  ];


  return (
    <div className=' z-30 fixed top-0 w-full'>
      <div className='header-parent bg-[black] flex lg:space-x-72 sm:h-36 h-32 sm:p-1 p-2 shadow-lg '>

        <Link to='/'>
          <div className=' z-50 sm:w-36 sm:h-12 w-32 h-12 lg:ml-14 ml-4 '>
            <img className=' w-auto h-auto sm:-m-2 -m-2 hover:animate-bounce duration-300 delay-300 transition-all ' src={torkLogo} alt='logo' />  
          </div>
        </Link>
        
        <header className=' hidden header lg:flex lg:justify-center lg:space-x-16 '>
          
          <NavigationDesktop navLinks={navLinks} className= '' />
          
        </header>

        {/* opening amd closing of mobile navbar */}
        <div onClick={() => setNav(!nav) } className=" absolute cursor-pointer pr-8 z-30 lg:hidden flex left-[19rem] md:left-[41rem] top-12">
          {nav ? <FaTimes className=" text-[#f59898] md:w-12 md:h-12 w-9 h-9"/> : <HiMenu  className="text-[white] md:w-12 md:h-12 w-9 h-9"/>}
        </div>


        {nav && (

        <div className=" lg:hidden absolute flex  w-full h-screen top-0 left-0 bg-black opacity-90">
          <div className=" lg:hidden flex flex-col justify-start items-center  absolute top-0 left-44 w-60 md:w-full h-screen bg-black shadow-lg text-[#090c13] font-quicksand border-l-4 border-[#f59898] ">


            {/* My Documents*/}
            <div className="mt-32 flex flex-col space-y-8">

              <Link to="/">
                <button type='button' className=' group w-52 px-1 py-1  sm:py-2 sm:ml-36 sm:mt-2 rounded-3xl border bg-stone-200 
                        flex items-center text-center justify-center text-emerald-700 text-lg sm:text-base font-quicksand font-bold whitespace-nowrap '> 
                  Home Page
                </button>
              </Link>

              {/* underline */}
              <div className=" md:w-56 md:h-0 w-52 h-0 flex justify-center mt-4 border-b border-stone-400 md:ml-32 "></div>

              <NavigationDesktop navLinks={navLinks} />
                {/* underline */}
              <div className=" md:w-56 md:h-0 w-52 h-0 flex justify-center mt-20 border-b border-stone-400 md:ml-32 "></div>


              <Link to="/about-us">
                <button type='button' className=' text-[white] text-base sm:text-base md:text-xl font-quicksand font-semibold whitespace-nowrap md:ml-32 '> 
                  About Us
                </button>
              </Link>
              <Link to="/e-book-store">
                <button type='button' className=' text-[white] text-base md:text-xl sm:text-base font-quicksand font-semibold whitespace-nowrap md:ml-32 '> 
                  eBook Store
                </button>
              </Link>
            </div>

            <div className=" w-52 h-0 flex justify-center mt-4 border-b border-stone-400 md:-ml-[15rem]"></div>


            <Link to="/sign-out">
              <button type='button' className=' text-[white] text-base sm:text-base md:text-lg -ml-[7rem] md:-ml-[15rem] pl-2 i font-quicksand font-semibold whitespace-nowrap '> 
                Sign Out
              </button>
            </Link>

          </div> 
        </div>

        )}
        
    </div>
    </div>
  );
}

export default Navbar;
