import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ name, specialty, image, rating, location }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col items-center p-6 text-center">
            <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                    {/* Placeholder for image */}
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">No Image</div>
                    )}
                </div>
            </div>

            <h3 className="text-lg font-bold text-teal-900 mb-1">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{specialty}</p>

            {/* Rating and Location could be added here if needed, based on design */}
            <Link to="/booking" className="w-full block bg-teal-800 hover:bg-teal-900 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                Book an appointment
            </Link>
        </div>
    );
};

export default DoctorCard;
