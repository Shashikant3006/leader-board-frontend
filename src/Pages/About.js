import React from 'react';
import Header from '../Navbar/Header';
import Footer from '../Navbar/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed mb-4">
          Welcome to our platform! We are committed to delivering quality content, reliable resources, and a seamless
          experience for all our users. Our mission is to empower you with the tools and support you need to succeed.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed">
          Thank you for choosing us as your trusted partner. Together, let’s build a better future!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
