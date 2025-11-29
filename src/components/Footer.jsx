import React from 'react';
import { Instagram, Twitter, Music } from 'lucide-react'; // Music as placeholder for Spotify/Podcast icon

const Footer = () => {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold text-teal-900 mb-4">MedKit</h3>
                        <p className="text-sm text-teal-800 font-semibold mb-4">Follow us</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-teal-600 hover:text-teal-800"><Instagram size={20} /></a>
                            <a href="#" className="text-teal-600 hover:text-teal-800"><Twitter size={20} /></a>
                            <a href="#" className="text-teal-600 hover:text-teal-800"><Music size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-teal-900 mb-4 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">About us</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Privacy policy</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Terms of use</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-teal-900 mb-4 uppercase tracking-wider">Community</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Specialists</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Patients</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-teal-900 mb-4 uppercase tracking-wider">Help</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Support</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">FAQ</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-teal-600">Mobile App</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
