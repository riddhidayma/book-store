import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//react icons
import { FaBook } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navigation items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ];
    return (
        <header className={isSticky ? "sticky top-0 z-50 bg-white shadow-lg" : " bg-blue-300"}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 text-base ">
                    {/* Logo */}
                    <Link to="/" className='flex items-center gap-2 text-2xl font-bold text-blue-700'>
                        <FaBook className='inline-block' />Books
                    </Link>
    
                    {/* Nav items for large devices */}
                    <ul className='hidden md:flex space-x-12'>
                        {
                            navItems.map(({ link, path }) => (
                                <Link 
                                    key={path} 
                                    to={path} 
                                    className='inline-block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>
    
                    {/* Button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            { 
                                isMenuOpen 
                                ? <FaXmark className='h-5 w-5 text-black' /> 
                                : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>
    
                {/* Nav items for small devices */}
                <ul className={`md:hidden space-y-4 px-4 py-7 bg-blue-700 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? "block fixed top-16 left-0 right-0 z-50" : "hidden"
                }`}>
                    {
                        navItems.map(({ link, path }) => (
                            <Link 
                                key={path} 
                                to={path} 
                                className='block text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                                {link}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
                    
};

export default Navbar;
