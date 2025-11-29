import React from 'react';
import { Stethoscope, Brain, Activity, Heart } from 'lucide-react';

const Specialists = () => {
    const specialties = [
        { name: 'Dentistry', icon: <Stethoscope className="w-8 h-8 text-blue-500" />, color: 'bg-blue-50' },
        { name: 'General health', icon: <Activity className="w-8 h-8 text-teal-500" />, color: 'bg-teal-50' },
        { name: 'Psychiatry', icon: <Brain className="w-8 h-8 text-purple-500" />, color: 'bg-purple-50' },
        { name: 'Neurology', icon: <Brain className="w-8 h-8 text-yellow-500" />, color: 'bg-yellow-50' }, // Using Brain as placeholder for Neurology
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-teal-900 mb-8">
                            We offer a wide range of specialists for your health
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {specialties.map((spec, index) => (
                                <div key={index} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`p-3 rounded-full ${spec.color} mr-4`}>
                                        {spec.icon}
                                    </div>
                                    <span className="font-medium text-gray-700">{spec.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <a href="/find-doctor" className="text-teal-600 font-medium hover:text-teal-700 flex items-center">
                                Show more <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Placeholder for the doctor image */}
                        <div className="bg-gray-100 rounded-full aspect-square max-w-md mx-auto flex items-center justify-center">
                            <span className="text-gray-400">Doctor Image</span>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg">
                            <div className="flex items-center space-x-2">
                                <span className="text-yellow-500">★</span>
                                <span className="text-sm font-bold">All Fields</span>
                            </div>
                            <span className="text-xs text-gray-500">of specialization</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialists;
