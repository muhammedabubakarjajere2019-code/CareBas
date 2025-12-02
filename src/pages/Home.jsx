import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Specialists from '../components/Specialists';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Specialists />
            <Footer />
        </div>
    );
};

export default Home;
