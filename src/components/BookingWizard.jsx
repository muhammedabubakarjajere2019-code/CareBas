import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Video, MapPin, Home } from 'lucide-react';

// Components for each step
const DateSelection = ({ selectedDate, onSelect }) => {
    // Mock calendar view - simplified for this demo
    const currentMonth = "August 2023";
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="flex justify-between items-center mb-6">
                <button className="text-gray-400 hover:text-gray-600">&lt;</button>
                <h3 className="font-bold text-lg text-gray-800">{currentMonth}</h3>
                <button className="text-gray-400 hover:text-gray-600">&gt;</button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
                <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {/* Padding for start of month if needed */}
                <div className="p-2"></div>

                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => onSelect(day)}
                        className={`p-2 rounded-full w-10 h-10 flex items-center justify-center text-sm transition-colors
              ${selectedDate === day
                                ? 'bg-purple-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <div className="mt-8">
                <h4 className="font-bold text-teal-900 mb-4">Pick an available time</h4>
                {/* This would trigger the next step or show times below */}
            </div>
        </div>
    );
};

const TimeSelection = ({ selectedTime, onSelect }) => {
    const times = [
        "8:30 AM", "8:45 AM", "9:00 AM", "9:15 AM",
        "9:30 AM", "9:45 AM", "10:00 AM", "10:15 AM",
        "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM",
        "11:30 AM", "11:45 AM", "1:00 PM"
    ];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-center font-bold text-teal-900 mb-6">Pick an available time</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {times.map(time => (
                    <button
                        key={time}
                        onClick={() => onSelect(time)}
                        className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all
              ${selectedTime === time
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-200 text-gray-600 hover:border-purple-300'}`}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
};

const TypeSelection = ({ selectedType, onSelect }) => {
    const types = [
        { id: 'online', label: 'Online Consultation', icon: <Video className="w-6 h-6" /> },
        { id: 'physical', label: 'Physical consultation', icon: <MapPin className="w-6 h-6" /> },
        { id: 'home', label: 'Request home service', icon: <Home className="w-6 h-6" /> }
    ];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-center font-bold text-teal-900 mb-6">Appointment type</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {types.map(type => (
                    <button
                        key={type.id}
                        onClick={() => onSelect(type.id)}
                        className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-4 transition-all h-40
              ${selectedType === type.id
                                ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-sm'
                                : 'border-gray-200 text-gray-500 hover:border-purple-300 hover:text-purple-600'}`}
                    >
                        <div className={`${selectedType === type.id ? 'text-purple-600' : 'text-gray-400'}`}>
                            {type.icon}
                        </div>
                        <span className="font-medium text-sm">{type.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

const Confirmation = ({ doctor, date, time, type }) => {
    return (
        <div className="bg-teal-800 text-white p-12 rounded-2xl text-center shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>

            <h2 className="text-3xl font-bold mb-4">Your booking is now confirmed!</h2>

            <div className="space-y-2 text-teal-100 mb-8">
                <p className="font-medium text-lg">{doctor.name}, {doctor.clinic}</p>
                <p>Thursday, 17 August 2023</p> {/* Hardcoded for demo matching screenshot */}
                <p>{time} {type === 'online' ? 'Online Consultation' : 'Physical Consultation'}</p>
            </div>

            <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Go back to Client zone
                </button>
                <button className="w-full border border-teal-400 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

const BookingWizard = ({ doctor }) => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        date: 17, // Defaulting to match screenshot
        time: '9:15 AM',
        type: 'online'
    });

    const updateData = (key, value) => {
        setBookingData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);

    return (
        <div className="space-y-8">
            {step < 4 && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                            {/* Placeholder image */}
                            <img src="https://ui-avatars.com/api/?name=Mary+Weather&background=random" alt={doctor.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-teal-900">{doctor.name}</h3>
                            <p className="text-sm text-gray-500">{doctor.specialty}</p>
                            <div className="flex gap-4 mt-2 text-xs text-gray-400">
                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Mon-Fri, 8:30-11:00 AM</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                            <MapPin size={16} />
                            <span>{doctor.location}</span>
                        </div>
                        <p className="text-xs text-gray-400">Senior at {doctor.clinic}</p>
                    </div>

                    <div>
                        <button className="bg-teal-800 text-white px-6 py-2 rounded-lg text-sm font-medium">
                            Book an appointment
                        </button>
                    </div>
                </div>
            )}

            {step === 1 && (
                <>
                    <DateSelection
                        selectedDate={bookingData.date}
                        onSelect={(date) => updateData('date', date)}
                    />
                    <TimeSelection
                        selectedTime={bookingData.time}
                        onSelect={(time) => updateData('time', time)}
                    />
                    <div className="text-center">
                        <button onClick={nextStep} className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-12 rounded-lg transition-colors">
                            Next Step
                        </button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <TypeSelection
                        selectedType={bookingData.type}
                        onSelect={(type) => updateData('type', type)}
                    />
                    <div className="text-center mt-8">
                        <button onClick={() => setStep(4)} className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-12 rounded-lg transition-colors w-full md:w-auto">
                            Confirm appointment
                        </button>
                    </div>
                </>
            )}

            {step === 4 && (
                <Confirmation
                    doctor={doctor}
                    date={bookingData.date}
                    time={bookingData.time}
                    type={bookingData.type}
                />
            )}
        </div>
    );
};

export default BookingWizard;
