import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Bell, Stethoscope, FileText, Phone, Package, Heart, Pill, Shield, Activity } from 'lucide-react';

const ClientDashboard = () => {
    const userProfile = {
        name: 'Helena Toad',
        age: 35,
        gender: 'Female',
        photo: null,
        dateOfBirth: '15/06/96 ?1:30',
        disorder: '153 124 445',
        disorders: ['Diabetes', 'Arthritis', 'Hypothyroid problems'],
        lastCheckup: {
            date: '15/09/2021',
            notes: 'I\'ll be back real one. She\'s usually sharp on her feet, yesterday was just a very nasty hangover, she deserves it. She needs another week with new medication.'
        }
    };

    const upcomingAppointments = [
        { type: 'General check-up', date: 'Aug 12' },
        { type: 'Ultrasound check-up', date: 'Aug 16' }
    ];

    const recentlyBooked = [
        { type: 'Dentist', date: 'Aug 12' }
    ];

    const notifications = [
        { icon: <Phone className="w-5 h-5" />, label: 'Voicemail', color: 'bg-orange-50 text-orange-500' },
        { icon: <Package className="w-5 h-5" />, label: 'Supplies', color: 'bg-purple-50 text-purple-500' },
        { icon: <Heart className="w-5 h-5" />, label: 'Health tips', color: 'bg-yellow-50 text-yellow-600' },
        { icon: <Activity className="w-5 h-5" />, label: 'Updates', color: 'bg-orange-50 text-orange-500' },
        { icon: <Pill className="w-5 h-5" />, label: 'Vitamins', color: 'bg-yellow-50 text-yellow-600' },
        { icon: <Shield className="w-5 h-5" />, label: 'Health', color: 'bg-yellow-50 text-yellow-600' }
    ];

    const diagnoses = [
        { name: 'Pneumonia', time: '7 weeks ago', icon: <Activity className="w-5 h-5 text-teal-600" /> },
        { name: 'Skin Derash', time: '7 weeks ago', icon: <Activity className="w-5 h-5 text-teal-600" /> },
        { name: 'Covid-19', time: '2 weeks ago', icon: <Activity className="w-5 h-5 text-teal-600" /> },
        { name: 'Myocardial flu', time: '7 weeks ago', icon: <Activity className="w-5 h-5 text-teal-600" /> }
    ];

    const doctors = [
        { name: 'Mary Weather', specialty: 'General', photo: '/images/mary.jpg' },
        { name: 'Martina Thomp', specialty: 'Dermatology', photo: '/images/martina.jpg' },
        { name: 'Betty van Damm', specialty: 'General person', photo: null },
        { name: 'Rudy Piers', specialty: 'General', photo: null },
        { name: 'Evan Terry', specialty: 'General', photo: null }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Sidebar - User Profile */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto rounded-full bg-pink-100 overflow-hidden mb-4">
                                    {userProfile.photo ? (
                                        <img src={userProfile.photo} alt={userProfile.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img src="https://ui-avatars.com/api/?name=Helena+Toad&background=ff6b9d&color=fff" alt={userProfile.name} className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">{userProfile.name}</h2>
                                <p className="text-sm text-gray-500">{userProfile.age} years, {userProfile.gender}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">General info</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Date of birth:</span>
                                        <span className="text-gray-900 font-medium">{userProfile.dateOfBirth}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Disorder:</span>
                                        <span className="text-gray-900 font-medium">{userProfile.disorder}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Disorders</h3>
                                <div className="space-y-2">
                                    {userProfile.disorders.map((disorder, idx) => (
                                        <div key={idx} className={`text-xs px-3 py-2 rounded-lg ${idx === 2 ? 'bg-yellow-100 text-yellow-800' : 'text-teal-700'}`}>
                                            {disorder}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Last check up</h3>
                                <div className="bg-blue-50 rounded-lg p-3">
                                    <p className="text-sm font-bold text-gray-900 mb-2">{userProfile.lastCheckup.date}</p>
                                    <p className="text-xs text-gray-600">{userProfile.lastCheckup.notes}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Upcoming Appointments */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming appointments</h3>
                            <div className="space-y-3 mb-4">
                                {upcomingAppointments.map((apt, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-teal-600" />
                                            <span className="text-sm text-gray-700">{apt.type}</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">{apt.date}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Recently booked appointments</h4>
                                {recentlyBooked.map((apt, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-teal-600" />
                                            <span className="text-sm text-gray-700">{apt.type}</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">{apt.date}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full bg-teal-800 hover:bg-teal-900 text-white font-medium py-3 rounded-lg transition-colors">
                                Book new appointment
                            </button>
                        </div>

                        {/* Notifications */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Your notifications</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {notifications.map((notif, idx) => (
                                    <div key={idx} className={`flex flex-col items-center justify-center p-4 rounded-xl ${notif.color}`}>
                                        {notif.icon}
                                        <span className="text-xs mt-2 font-medium">{notif.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Diagnoses */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Your diagnoses</h3>
                            <div className="space-y-3">
                                {diagnoses.map((diagnosis, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-3 border-b last:border-0">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                                                {diagnosis.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{diagnosis.name}</p>
                                                <p className="text-xs text-gray-500">{diagnosis.time}</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <span className="text-xl">›</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Mini Calendar */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="text-center mb-4">
                                <h3 className="text-sm font-semibold text-gray-900">June 2024</h3>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-500">
                                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                                    <div key={day} className={`py-1 ${day === 17 ? 'bg-teal-800 text-white rounded-full' : 'text-gray-700'}`}>
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category Pills */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">First opened</h3>
                            <div className="flex gap-2 mb-4">
                                <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-blue-500" />
                                    <span className="text-xs text-blue-700">Dental</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg">
                                    <Activity className="w-4 h-4 text-purple-500" />
                                    <span className="text-xs text-purple-700">Dentist</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg">
                                    <Activity className="w-4 h-4 text-teal-500" />
                                    <span className="text-xs text-teal-700">Dermathology</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 bg-pink-50 rounded-lg">
                                    <Heart className="w-4 h-4 text-pink-500" />
                                    <span className="text-xs text-pink-700">Neurologist</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg">
                                    <Shield className="w-4 h-4 text-teal-500" />
                                    <span className="text-xs text-teal-700">Psychiatrist</span>
                                </div>
                            </div>
                        </div>

                        {/* Your Doctors */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Your doctors</h3>
                            <div className="space-y-3">
                                {doctors.map((doctor, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-25 h-25 rounded-full bg-gray-200 overflow-hidden" style={{ width: '100px', height: '100px' }}>
                                                <img src={doctor.photo || `https://ui-avatars.com/api/?name=${doctor.name.replace(' ', '+')}&background=random`} alt={doctor.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{doctor.name}</p>
                                                <p className="text-xs text-gray-500">{doctor.specialty}</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <span className="text-xl">⋮</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ClientDashboard;
