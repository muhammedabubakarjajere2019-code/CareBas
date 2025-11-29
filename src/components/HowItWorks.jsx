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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            </div>
        </div>
    );
};

export default HowItWorks;
