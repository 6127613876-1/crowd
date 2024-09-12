import React from "react";
import Navbar from "../components/Navbar";
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/cbg.webp";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white";

const GetStarted = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="min-h-screen text-white p-8">
        <div className="flex justify-center space-x-4 mb-8">
          <div className="gradient-bg-footers p-4 rounded-lg w-35 text-center">
            <h1 className="text-4xl font-bold text-white">2M+</h1>
            <p className="text-gray-400">smart contracts deployed</p>
          </div>
          <div className="gradient-bg-footers p-4 rounded-lg w-35 text-center">
            <h1 className="text-4xl font-bold text-white">1M+</h1>
            <p className="text-gray-400">monthly transactions</p>
          </div>
          <div className="gradient-bg-footers p-4 rounded-lg w-35 text-center">
            <h1 className="text-4xl font-bold text-white">1,000+</h1>
            <p className="text-gray-400">EVM chains</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold">
            Any smart contract, on any EVM chain
          </h2>
          <p className="text-gray-400 mt-2">
            Explore & extend our library of audited, modular smart contracts —
            and deploy to any EVM chain in seconds.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "NFT Drop", author: "thirdweb.eth" },
            { title: "Marketplace", author: "thirdweb.eth" },
            { title: "Account Factory", author: "thirdweb.eth" },
            { title: "Edition Drop", author: "thirdweb.eth" },
            { title: "Token", author: "thirdweb.eth" },
            { title: "StakeERC721", author: "thirdweb.eth" },
          ].map((item, index) => (
            <div key={index} className="gradient-bg-footer p-4 rounded-lg">
              <p className="text-green-500 mb-2">Audited</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
          <div className="flex flex-[0.5] justify-center items-center">
            <img src={logo} alt="logo" className="w-32 rounded-full" />
          </div>

          <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <Link
              to="/get-started"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Get Started
            </Link>
            <Link
              to="/campaign"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Campaign
            </Link>
            <Link
              to="/tutorials"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Tutorials
            </Link>
            <Link
              to="/wallets"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Wallets
            </Link>
            <Link
              to="/about"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
          <p className="text-white text-sm text-center">
            Come join us and help our world
          </p>
          <p className="text-white text-sm text-center font-medium mt-2">
            CrowdChain@gmail.com
          </p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
          <p className="text-white text-left text-xs">CrowdChain@gmail.com</p>
          <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
        <div className="flex flex-[0.5] justify-center items-center ">
          <FaGoogle fontSize={32} className="text-white  cursor-pointer pr-2" />
          <FaFacebook
            fontSize={32}
            className="text-white  cursor-pointer pr-2"
          />
          <FaTwitter
            fontSize={32}
            className="text-white  cursor-pointer pr-2"
          />
          <FaInstagram
            fontSize={32}
            className="text-white  cursor-pointer pr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
