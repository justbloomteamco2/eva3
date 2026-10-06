import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/\D/g, '')}`} aria-label="Open demo WhatsApp contact"><MessageCircle /></a>
    </div>
  );
};

export default MainLayout;
