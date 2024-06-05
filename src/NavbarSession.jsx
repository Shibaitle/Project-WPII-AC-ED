import React, { useState } from "react";
import logo from "./components/icon/ACEDlogo.png";
import userAvatar from "./components/avatar/user-avatar.png";
import SmallCircle from "./profile_fit_circle/small";


const NavbarSession = ({Logout, User_image}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search value:", searchValue);
  };

  return (
    <nav className="bg-slate-700 p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="ml-4 cursor-pointer w-16" />
        </a>
        <ul className="ml-10 flex space-x-6 text-white">
          <li className="flex items-center mr-4 cursor-pointer">
            <a href="/Category" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-8 h-8 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
              </svg>
              Category
            </a>
          </li>
          <li className="flex items-center mr-4 cursor-pointer">
            <a href="/Watchlist" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="w-8 h-8 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              Library
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
      <form onSubmit={handleSubmit} className="flex items-center mr-6 ">
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search for book. . ."
              className="pl-5 px-12 py-3 rounded-full border border-white text-black hover:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 px-4 py-1 border border-white bg-red-700 rounded-full text-white font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
              </svg>
            </button>
          </div>
        </form>

        <div className="relative">
          
          <button onClick={toggleDropdown} className="flex items-center bg-red-700 px-4 py-2 rounded-md text-white font-semibold">
            <SmallCircle src={userAvatar}/>
            {/* <img src={User_image} alt="User Avatar" className="w-8 h-8 mr-2 rounded-full object-cover" /> */}
          </button>

          {/*Dropdown*/}
          <div className={`absolute right-0 mt-2 w-48 bg-black shadow-lg border border-white ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="block px-4 py-2 text-white hover:bg-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Profile 
            </a>
            <a href="#" onClick={Logout} className="block px-4 py-2 text-white hover:bg-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSession;