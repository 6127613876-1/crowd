import React from 'react';
import logo from '../../images/cbg.webp';
import { Link } from 'react-router-dom';
import { createThirdwebClient } from "thirdweb";
import { useConnect } from "thirdweb/react";
import { ThirdwebProvider, ConnectButton,ConnectEmbed } from "thirdweb/react";
import { createWallet, inAppWallet,injectedProvider  } from "thirdweb/wallets";
const client = createThirdwebClient({ clientId: "f77515d189e3c3cda68e0a7bf0c1779a" });
import {FaGoogle,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import { Navbar } from '../components';
import { Spotlight } from "../components/ui/Spotlight";

const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

const Login = () => {
    return (
      <div className="gradient-bg-welcome text-white">
        <Navbar/>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1
          className="font-sans text-4xl sm:text-5xl "
          style={{ marginLeft: "820px" }}
        >
          The best way to Get Started
        </h1>
        <br />
        <p style={{ marginLeft: "900px" }} className="font-sans font-bold">
          Create a login experience your app. Add your wallets of
        </p>
        <p style={{ marginLeft: "825px" }} className="font-sans font-bold">
          choice, enable web2 sign-in options and create a modal that fits your
          brand.
        </p>
        <div>
          <br />
          <h3 className="font-sans text-4xl sm:text-5xl  mt-20 pl-20">
            Let's begin your
            <br /> fundraising journey
          </h3>
          <p className="font-sans mt-6 pl-20 font-bold">
            We Provide guide for the every steps you take
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div
          style={{
            marginLeft: "940px",
            marginTop: "-400px",
            marginBottom: "100px",
          }}
        >
          <ThirdwebProvider>
            <ConnectEmbed client={client} wallets={wallets} />
          </ThirdwebProvider>
        </div>
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
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
                to="/profile"
                className="text-white text-base text-center mx-2 cursor-pointer"
              >
                profile
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
            <FaGoogle
              fontSize={32}
              className="text-white  cursor-pointer pr-2"
            />
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

export default Login;

