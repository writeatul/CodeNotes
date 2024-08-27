import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom'; // Ensure Navigate is imported here
import Courses from './courses/Courses';
import { Toaster } from 'react-hot-toast';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider';
import AboutUs from './AboutUs.jsx/AboutUs';
import Contact from './contact/Contact';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/aboutus" element={<AboutUs /> } />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
