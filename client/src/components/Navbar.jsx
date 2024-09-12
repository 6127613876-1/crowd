import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/cbg.webp';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[1] flex-initial justify-center items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-32 cursor-pointer rounded-full" />
                </Link>
                <h1 className="text-3xl sm:text-2xl text-white ">
                            CrowdChain
                </h1>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                <li className="mx-4 cursor-pointer">
                    <Link to="/get-started">Get Started</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link to="/campaign">Campaign</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link to="/tutorials">Tutorials</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link to="/wallets">Wallets</Link>
                </li>
                <li className="bg-[#2852e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in cu
                        "
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <li className="my-2 text-lg">
                            <Link to="/get-started" onClick={() => setToggleMenu(false)}>Get Started</Link>
                        </li>
                        <li className="my-2 text-lg">
                            <Link to="/campaign" onClick={() => setToggleMenu(false)}>Campaign</Link>
                        </li>
                        <li className="my-2 text-lg">
                            <Link to="/tutorials" onClick={() => setToggleMenu(false)}>Tutorials</Link>
                        </li>
                        <li className="my-2 text-lg">
                            <Link to="/wallets" onClick={() => setToggleMenu(false)}>Wallets</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};
//sRYE4xs9LaYX4M-XGhbECxZZd7p_EMneQE1CP9t1eNFEkMmW7Eh1FS4TswPXLNu71o7BbhDNRTV8TqY2LwULuQ
export default Navbar;
