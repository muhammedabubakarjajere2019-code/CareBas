import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Content - Light Blue-Gray Background */}
                <div className="bg-[#f0f4f8] px-8 sm:px-12 lg:px-16 py-12 lg:py-20 flex items-center">
                    <div className="max-w-xl space-y-6">
                        <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-teal-800 leading-tight">
                            Connect with top rated doctors in just a few clicks
                        </h1>
                        <p className="text-gray-700 text-base lg:text-lg">
                            Select your doctor and preferred time slot to book your appointment
                        </p>

                        {/* Booking Form */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mt-8">
                            <h3 className="text-lg font-semibold text-teal-800 mb-4">Book your appointment</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <select className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white">
                                    <option>Specialty</option>
                                    <option>Cardiology</option>
                                    <option>Dermatology</option>
                                    <option>Pediatrics</option>
                                </select>
                                <select className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white">
                                    <option>Location</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Chicago</option>
                                </select>
                                <select className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white">
                                    <option>Date</option>
                                    <option>Today</option>
                                    <option>Tomorrow</option>
                                    <option>This Week</option>
                                </select>
                            </div>
                            <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out shadow-md">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Dark Teal Background with Doctor Image */}
                <div className="relative bg-[#0d7377] px-8 py-12 lg:py-20 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        {/* Circular Doctor Image Container */}
                        <div className="relative rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 aspect-square shadow-2xl">
                            <img
                                src="/doctor-nurse.png"
                                alt="Professional Doctor"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badge - 200,000+ Registered Patients (Top Left) */}
                        <div className="absolute left-0 top-[15%] bg-white px-4 py-2.5 rounded-full shadow-xl flex items-center space-x-2">
                            <div className="bg-blue-100 p-1.5 rounded-full">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900">200,000+</span>
                                <span className="text-[10px] text-gray-600">Registered Patients</span>
                            </div>
                        </div>

                        {/* Floating Badge - 5,000+ Doctors Online (Top Right) */}
                        <div className="absolute right-0 top-[28%] bg-white px-4 py-2.5 rounded-full shadow-xl flex items-center space-x-2">
                            <div className="bg-blue-100 p-1.5 rounded-full">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900">5,000+</span>
                                <span className="text-[10px] text-gray-600">Doctors Online</span>
                            </div>
                        </div>

                        {/* Join Today Button (Left Middle) */}
                        <div className="absolute left-4 top-[48%] bg-white px-5 py-2.5 rounded-full shadow-xl flex items-center space-x-2 hover:shadow-2xl transition-shadow cursor-pointer">
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            <span className="text-sm font-semibold text-gray-900">Join Today!</span>
                        </div>

                        {/* #1 Worldwide Medical Website Badge (Bottom Right) */}
                        <div className="absolute bottom-8 right-0 bg-white px-4 py-2.5 rounded-xl shadow-xl flex items-center space-x-2">
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <span className="text-yellow-600 font-bold text-sm">#1</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-900">Worldwide</span>
                                <span className="text-[10px] text-gray-600">Medical Website</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
