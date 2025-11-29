import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingWizard from '../components/BookingWizard';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const { id } = useParams();

    // In a real app, we would fetch doctor details by ID here.
    // For now, we'll use a mock object or pass it via state/context.
    const doctor = {
        name: 'Mary Weather, MD',
        specialty: 'Endodontics',
        image: null, // Placeholder
        location: 'Copenhagen, Denmark',
        clinic: 'Endodontics Clinic'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="bg-teal-900 py-12 text-center text-white">
                <h1 className="text-3xl font-bold mb-2">Book your appointment online</h1>
                <p className="text-teal-100">Pick date, time and appointment type</p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BookingWizard doctor={doctor} />
            </div>

            <Footer />
        </div>
    );
};

export default BookingPage;
