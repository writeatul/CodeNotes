// AboutUs.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="dark:bg-slate-900 dark:text-white p-4 md:p-8 lg:p-12">

      <h1 className="text-5xl font-bold mb-2">About Us</h1>
      <p className="mb-4">
        Welcome to <strong>Code Notes by Harnoor</strong>! We're passionate about all things code, web development, and design.
      </p>
      <p className="mb-4">Let us introduce ourselves:</p>
      <ul className="list-disc ml-6 mb-6">
        <li className="mb-4">
          <strong>Harnoor P Singh</strong> - Founder & Developer
          <p className="text-gray-600">
            Harnoor is the driving force behind Code Notes. With research in web development, he's committed to simplifying complex concepts and making coding accessible to everyone.
          </p>
        </li>
      </ul>
      <p className="mb-4">
        Our mission at Code Notes is to empower developers, foster collaboration, and celebrate the art of coding. Whether you're a hobbyist or a pro, we're here to help you grow.
      </p>
      <p className="mb-2">Join our community, explore our tutorials, and let's learn together! 🚀</p>
    </div>
    <Footer/>
</>
  );
};

export default AboutUs;
