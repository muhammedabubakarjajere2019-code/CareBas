import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-teal-900 leading-tight">
                            Connect with top rated doctors in just a few clicks
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Select your doctor and preferred time slot to book your appointment
                        </p>

                        {/* Search Box */}
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold text-teal-800 mb-4">Book your appointment</h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="relative md:col-span-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Specialty"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                                <div className="relative md:col-span-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MapPin className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                                <div className="relative md:col-span-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="date"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                                <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out md:col-span-1">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-full overflow-hidden bg-gray-100 aspect-square max-w-md mx-auto">
                            {/* Placeholder for the doctor image - in a real app this would be an img tag */}
                            <div className="absolute inset-0 flex items-center justify-center bg-teal-50">
                                <span className="text-teal-200 text-6xl">Doctor Image</span>
                            </div>
                            {/* Floating Badges */}
                            <div className="absolute top-10 left-0 bg-white p-3 rounded-xl shadow-lg flex items-center space-x-2 animate-bounce-slow">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <span className="text-blue-600 font-bold">200k+</span>
                                </div>
                                <span className="text-xs font-medium text-gray-600">Registered Patients</span>
                            </div>

                            <div className="absolute bottom-20 right-0 bg-white p-3 rounded-xl shadow-lg flex items-center space-x-2">
                                <div className="bg-yellow-100 p-2 rounded-full">
                                    <span className="text-yellow-600 font-bold">#1</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-800">Worldwide</span>
                                    <span className="text-[10px] text-gray-500">Medical Website</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
