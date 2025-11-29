import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DoctorCard from '../components/DoctorCard';
import { Filter } from 'lucide-react';

const FindDoctor = () => {
    const [filters, setFilters] = useState({
        general: false,
        dentistry: true,
        neurology: false,
        xray: true,
        orthodontics: false,
    });

    // Mock data for doctors
    const doctors = [
        { id: 1, name: 'Gill Hames', specialty: 'Pediatric dentistry', image: null, rating: 5, location: 'Copenhagen' },
        { id: 2, name: 'Finn McDonald', specialty: 'Dentistry', image: null, rating: 4.8, location: 'Copenhagen' },
        { id: 3, name: 'Donna Summer', specialty: 'Prosthodontics', image: null, rating: 4.9, location: 'Copenhagen' },
        { id: 4, name: 'Dagmar McLean', specialty: 'Psychiatry', image: null, rating: 4.7, location: 'Copenhagen' },
        { id: 5, name: 'Richard Kicker', specialty: 'Urology', image: null, rating: 4.6, location: 'Copenhagen' },
        { id: 6, name: 'Millie Billie', specialty: 'Dermatology', image: null, rating: 4.9, location: 'Copenhagen' },
        { id: 7, name: 'Duncan Pitt', specialty: 'Orthodontics', image: null, rating: 4.5, location: 'Copenhagen' },
        { id: 8, name: 'Mary Weather', specialty: 'Endodontics', image: null, rating: 4.8, location: 'Copenhagen' },
        { id: 9, name: 'Jacob Abel', specialty: 'Periodontics', image: null, rating: 4.7, location: 'Copenhagen' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Search Header */}
            <div className="bg-teal-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white mb-2 text-center">Search for a specialist and make an appointment</h1>
                    <p className="text-teal-100 text-center mb-8">Select your doctor and preferred time slot to book your appointment</p>
                    <SearchBar />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-teal-900">Refine your search</h3>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                                />
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-teal-700">Specialty</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                                        <span className="text-gray-600">General practitioner</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" checked={filters.dentistry} readOnly />
                                        <span className="text-gray-900 font-medium">Dentistry</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                                        <span className="text-gray-600">Neurology</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" checked={filters.xray} readOnly />
                                        <span className="text-gray-900 font-medium">X-Ray</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                                        <span className="text-gray-600">Dermatology</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-500">Showing 175 search results</p>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-500">Sort by:</span>
                                <select className="border-none bg-transparent font-medium text-teal-900 focus:ring-0 cursor-pointer">
                                    <option>Highest rated</option>
                                    <option>Most reviews</option>
                                    <option>Price: Low to High</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {doctors.map(doctor => (
                                <DoctorCard key={doctor.id} {...doctor} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center items-center space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">{'<'}</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-900 text-white font-bold">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600">3</button>
                            <span className="text-gray-400">...</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600">20</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FindDoctor;
