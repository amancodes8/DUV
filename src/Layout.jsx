import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import TransitionWrapper from './TransitionWrapper';
import { FaTimes } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import ChatBot from './components/ChatBot';

function Layout() {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBox(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseBox = () => {
        setShowBox(false);
    };

    return (
        <div className='flex no-scrollbar flex-col bg-gray-900 w-screen h-fit min-h-screen overflow-x-hidden overflow-y-auto'>
            <Header />
            <TransitionWrapper>
                <Outlet />
            </TransitionWrapper>

            {/* Overlay Box */}
            {showBox && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden'>
                    <div className="relative box h-3/4 sm:w-[70%] w-[80%] flex border border-white bg-gray-100 text-black p-4">
                        <button
                            className="absolute top-2 right-2 text-black hover:text-red-500"
                            onClick={handleCloseBox}
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Left side with icons and text */}
                        <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-300 pr-4">
                            <h2 className="text-xl font-bold mb-4">Help us serve you better ?</h2>
                            <p>Get school counselling from experts, free of cost!</p>

                            {/* Icons Section */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="flex flex-col items-center">
                                    <FaUserDoctor className="h-12 w-12" />
                                    <p>Free Counselling</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaSchool className="h-12 w-12" />
                                    <p>Get Best Schools</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FcProcess className="h-12 w-12" />
                                    <p>Application Process</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MdOutlineSystemSecurityUpdateGood className="h-12 w-12" />
                                    <p>Timely Updates</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side with form */}
                        <div className="w-1/2 pl-4">
                            <form className="w-full space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="parentName" className="text-sm">Parent Name *</label>
                                    <input type="text" id="parentName" className="border p-2" placeholder="Parent Name" required />
                                </div>
                                <div className="flex flex-col overflow-auto">
                                    <label htmlFor="phoneNumber" className="text-sm">Phone Number *</label>
                                    <div className="flex">
                                        <span className="bg-gray-200 p-2 border">+91</span>
                                        <input type="tel" id="phoneNumber" className="border p-2 flex-grow" placeholder="Enter Phone Number" required />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm">Email Address (Optional)</label>
                                    <input type="email" id="email" className="border p-2" placeholder="Enter Email" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="class" className="text-sm">Class *</label>
                                    <select id="class" className="border p-2">
                                        <option value="">--- Select Class ---</option>
                                        <option value="nursery">Nursery</option>
                                        <option value="kg">KG</option>
                                        <option value="class1">Class 1</option>
                                        <option value="class2">Class 2</option>
                                        <option value="class3">Class 3</option>
                                        <option value="class4">Class 4</option>
                                        <option value="class5">Class 5</option>
                                        {/* Add more class options here */}
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="altPhone" className="text-sm">Alternate Number (Optional)</label>
                                    <input type="tel" id="altPhone" className="border p-2" placeholder="Enter Alternate Number" />
                                </div>
                                <button type="submit" className="bg-blue-600 text-white p-2 w-full">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <ChatBot/>
        </div>
    );
}

export default Layout;
