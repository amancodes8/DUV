import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { gsap } from 'gsap';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const [menuBar, setMenuBar] = useState(false);
    const [isClassesHovered, setIsClassesHovered] = useState(false);
    const navigate = useNavigate();

    function handleLogoclick() {
        navigate('/home');
    }

    const navItems = [
        { label: 'Home', link: '/home' },
        { label: 'About', link: '/about' },
        { label: 'Gallery', link: '/gallery' },
        { label: 'Classes', link: '/classes' },
        { label: 'Admission', link: '/admission' },
        { label: 'Blog', link: '/blog' },
        { label: 'News', link: '/news' },
        { label: 'Contact', link: '/contacts' },
        { label: "Student's Corner", link: '/scorner' },
    ];

    const classItems = [
        { label: 'Pre-Primary wing', link: '/classes/preprimary' },
        { label: 'Primary wing', link: '/classes/primary' },
        { label: 'Middle School', link: '/classes/middle' },
    ];

    useEffect(() => {
        if (isClassesHovered) {
            gsap.to(".dropdown", {
                opacity: 1,
                y: 0,
                display: 'block',
                duration: .2,
                ease: 'power2.out',
            });
        } else {
            gsap.to(".dropdown", {
                opacity: 0,
                y: -10,
                display: 'none',
                duration: 0.2,
                ease: 'power2.out',
            });
        }
    }, [isClassesHovered]);

    useEffect(() => {
        if (menuBar) {
            gsap.to(".mobile-menu", {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                display: 'block',
            });
        } else {
            gsap.to(".mobile-menu", {
                x: '-200',
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                display: 'none',
            });
        }
    }, [menuBar]);

    return (
        <div className='flex z-10 gap-[30%] items-start h-20 mb-40 w-screen fixed justify-between top-0 text-white py-1 overflow-x-hidden overflow-y-auto'>
            <div className='w-screen bg-gradient-to-r from-blue-600 to-indigo-600 flex justify-between items-center shadow-lg top-0 fixed'>
                <div onClick={handleLogoclick} className="logo w-44 h-40 ml-0 py-2">
                    <img className='h-full w-full' src="./images/logo1.png" alt="Logo" />
                </div>
                <div className='flex sm:hidden text-[40px] justify-end mr-3 mb-4 cursor-pointer' onClick={() => setMenuBar(!menuBar)}>
                    {menuBar ? null : <HiBars3 />}
                </div>

                {/* Desktop Menu */}
                <div className='mr-8 hidden md:flex z-10 rounded-2xl'>
                    <div className='flex justify-evenly gap-10 text-lg font-semibold font-sans rounded-2xl'>
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => item.label === 'Classes' && setIsClassesHovered(true)}
                                onMouseLeave={() => item.label === 'Classes' && setIsClassesHovered(false)}
                                className="relative group"
                            >
                                {item.label === 'Classes' ? (
                                    // Non-clickable span for "Classes"
                                    <span className='text-white cursor-default'>
                                        {item.label}
                                    </span>
                                ) : (
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) =>
                                            isActive ? 'text-yellow-400' : 'text-white'
                                        }
                                        style={{ transition: 'color 0.3s ease' }}
                                    >
                                        {item.label}
                                    </NavLink>
                                )}

                                {/* Classes Dropdown */}
                                {item.label === 'Classes' && (
                                    <ul className={`dropdown absolute z-10 left-0 mt-4 bg-gray-700 text-white p-2 w-52 rounded-lg shadow-md ${isClassesHovered ? 'block' : 'hidden'}`}>
                                        {classItems.map((subItem, subIndex) => (
                                            <li key={subIndex} className="p-2 hover:bg-gray-800 rounded-lg">
                                                <NavLink
                                                    to={subItem.link}
                                                    className={({ isActive }) =>
                                                        isActive ? 'text-yellow-400' : 'text-white'
                                                    }
                                                >
                                                    {subItem.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className='mobile-menu fixed top-0 left-0 w-full h-full bg-gray-800 text-white hidden px-1 py-2'>
                <div className="flex justify-end mt-6 mr-3">
                    <RxCross2 className="text-4xl cursor-pointer" onClick={() => setMenuBar(false)} />
                </div>

                <ul className='space-y-4 mt-10 flex w-full justify-center flex-col items-center'>
                    {navItems.map((item, index) => (
                        <li key={index} onClick={() => setMenuBar(!menuBar)}>
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    isActive ? 'text-yellow-400' : 'text-white'
                                }
                                style={{ transition: 'color 0.3s ease' }}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
