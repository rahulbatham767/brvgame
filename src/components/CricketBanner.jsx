import React from "react";
import { motion } from "framer-motion";

import { Ticket as Cricket } from "lucide-react";
export default function CricketBanner() {
  const handleWhatsAppRedirect = () => {
    const message =
      "** Hello! I want to create an account and start earning money with BRV Online Book. **";
    window.location.href = `https://wa.me/639072368736?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="w-full">
      <div className="relative h-screen bg-cover bg-center w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-200 mb-6">
            BRV ONLINE BOOK
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-10">
            WE OFFER THE BEST & GENUINE EXPERIENCE
          </p>

          {/* Decorative Line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-24 h-0.5 bg-green-200"></div>
            <Cricket size={28} className="text-green-200" />
            <div className="w-24 h-0.5 bg-green-200"></div>
          </div>

          <a
            onClick={handleWhatsAppRedirect}
            className="inline-flex items-center cursor-pointer gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <span className="flex items-center gap-2 text-white">
              GET YOUR CRICKET ID
            </span>
          </a>

          {/* WhatsApp Icon */}

          {/* About Section */}
          <div className="max-w-3xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold text-green-200 mb-6">
              About BRV
            </h2>
            <p className="text-green-100 mb-10 leading-relaxed">
              BRV Online Book is your trusted partner for online sports IDs. We
              specialize in cricket IDs and gaming sports IDs, offering a
              seamless and secure experience. Join over 90,000 players who trust
              us for the best online gaming opportunities. Play, compete, and
              win with BRV!
            </p>

            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-0.5 bg-green-300"></div>
              <Cricket size={24} className="text-green-300" />
              <div className="w-16 h-0.5 bg-green-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
