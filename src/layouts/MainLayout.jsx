import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

const MainLayout = () => {
  const handleWhatsappClick = () => {
    if (window.fbq) window.fbq('track', 'Contact');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <a 
        className="floating-whatsapp" 
        href="https://wa.me/919035214907"
        onClick={handleWhatsappClick}
        aria-label="Chat on WhatsApp 9035214907"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle />
      </a>
    </div>
  );
};

export default MainLayout;