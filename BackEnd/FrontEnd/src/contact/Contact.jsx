import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const emailAddress = 'harnoor@codenotes.com'; // Replace with your actual email address

  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 dark:text-white p-4 md:p-8 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Have questions or feedback? Feel free to reach out to us at:
        </p>
        <a href={`mailto:${emailAddress}`} className="text-blue-500 hover:underline">
          {emailAddress}
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
