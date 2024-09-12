import React from "react";
import { Link } from "react-router-dom";

import logo from '../../images/cbg.webp';
import {FaGoogle,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32 rounded-full" />
      </div >
      
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <Link to="/get-started" className="text-white text-base text-center mx-2 cursor-pointer">Get Started</Link>
        <Link to="/campaign" className="text-white text-base text-center mx-2 cursor-pointer">Campaign</Link>
        <Link to="/tutorials" className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</Link>
        <Link to="/wallets" className="text-white text-base text-center mx-2 cursor-pointer">Wallets</Link>
        <Link to="/about" className="text-white text-base text-center mx-2 cursor-pointer">About</Link>

      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and help our world</p>
      <p className="text-white text-sm text-center font-medium mt-2">CrowdChain@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">CrowdChain@gmail.com</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
    <div className="flex flex-[0.5] justify-center items-center ">
      <FaGoogle fontSize={32} className="text-white  cursor-pointer pr-2"/>
      <FaFacebook fontSize={32} className="text-white  cursor-pointer pr-2"/>
      <FaTwitter fontSize={32} className="text-white  cursor-pointer pr-2"/>
      <FaInstagram fontSize={32} className="text-white  cursor-pointer pr-2"/>
    </div>
    
  </div>
  
);

export default Footer;