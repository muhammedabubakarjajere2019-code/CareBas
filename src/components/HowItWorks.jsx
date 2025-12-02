import React from 'react';
import { UserSearch, MapPin, CalendarCheck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Find your doctor',
            description: 'Choose from a variety of our medical specialists',
            icon: <UserSearch className="w-8 h-8 text-teal-600" />,
            bg: 'bg-teal-50'
        },
        {
            title: 'Choose location',
            description: 'Find doctors and medical offices in your area',
            icon: <MapPin className="w-8 h-8 text-blue-600" />,
            bg: 'bg-blue-50'
        },
        {
            title: 'Find free time slot',
            description: 'Choose a time that is the most convenient for you',
            icon: <CalendarCheck className="w-8 h-8 text-purple-600" />,
            bg: 'bg-purple-50'
        },
        {
            title: 'Get a solution',
            description: 'We can hold an appointment either on video or chat',
            icon: <CheckCircle className="w-8 h-8 text-yellow-600" />,
            bg: 'bg-yellow-50'
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-teal-900 mb-12">How it works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`w-20 h-20 rounded-full ${step.bg} flex items-center justify-center mb-6`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-teal-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Doctor Image Section with "Booking made easy" */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Doctor Image with Sign up tag */}
                        <div className="relative flex justify-center md:justify-start">
                            <div className="relative">
                                {/* Circular background */}
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-end justify-center overflow-hidden">
                                    <img
                                        src="/doctor-specialist.jpg"
                                        alt="Doctor"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Sign up now tag */}
                                <div className="absolute top-8 left-0 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-600" />
                                    <span className="text-sm font-semibold text-gray-800">Sign up now</span>
                                    <span className="text-xs text-gray-500">in next page, check us!</span>
                                </div>
                            </div>
                        </div>

                        {/* Booking made easy content */}
                        <div className="text-left">
                            <h3 className="text-3xl font-bold text-teal-900 mb-6">Booking made easy</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                    <span className="text-gray-700">Find your specialist</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                    <span className="text-gray-700">Describe your problem</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                    <span className="text-gray-700">Set a meeting type</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                    <span className="text-gray-700">Book your time</span>
                                </li>
                            </ul>
                            <button className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md">
                                Book an appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
