import React from 'react';
import Header from '../Navbar/Header';
import Footer from '../Navbar/Footer';

const Help = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Help & Support</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed mb-4">
          Welcome to the Help page! Here you can find answers to frequently asked questions, as well as guidance on
          using our platform effectively. Our goal is to provide you with all the information you need to have a smooth
          experience.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed">
          If you have any further questions or need additional support, please don't hesitate to reach out to us.
          We’re here to help!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
