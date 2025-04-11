import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FooterDisclaimer() {
  const [showTerms, setShowTerms] = useState(false);

  const handleWhatsAppRedirect = () => {
    window.location.href = `https://wa.me/447565760245?text=I%20want%20to%20create%20an%20account%20and%20earn%20with%20you`;
  };

  return (
    <div>
      {/* Main Footer */}
      <footer className="text-center text-gray-300 text-sm p-6 border-t border-gray-600">
        <p className="font-medium">
          © {new Date().getFullYear()} BRB GAMING PLATFORM. 18+ ONLY.
        </p>
        <p className="mt-2">
          GAMBLE RESPONSIBLY -{" "}
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="text-yellow-300 hover:underline font-medium focus:outline-none"
          >
            TERMS & CONDITIONS
          </button>
        </p>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowTerms(false)} // Close on clicking outside the modal
        >
          <div
            className="bg-gray-900 text-gray-300 text-sm px-6 py-4 mt-2 rounded-lg max-w-4xl mx-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-2 right-2 text-white font-bold text-xl"
            >
              &times; {/* This is the close (×) symbol */}
            </button>
            <h3 className="text-lg font-semibold text-white mb-2">
              Terms & Conditions
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Only individuals aged 18 and above are permitted to use this
                platform.
              </li>

              <li>
                No real money is involved. We operate solely through fantasy
                sports IDs.
              </li>
              <li>
                We only communicate and transact via official WhatsApp numbers.
              </li>
              <li>
                By using our services, you agree not to hold us liable for any
                third-party misuse or impersonation.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Disclaimer Footer */}
      {/* <footer className="bg-black text-gray-300 text-sm px-4 py-6 mt-10">
        <div className="max-w-5xl mx-auto text-center leading-relaxed">
          <p>
            <strong className="text-gray-100">Disclaimer:</strong> This website
            is only for 18+ users. Please leave this site if you are from{" "}
            <span className="text-red-400">
              Andhra Pradesh, Assam, Nagaland, Orissa, Sikkim
            </span>{" "}
            and <span className="text-red-400">Telangana</span>.
          </p>
          <p className="mt-2">
            Be aware of fraudsters, we only deal via WhatsApp.{" "}
            <strong className="text-white">No Real Money Involvement.</strong>
          </p>
          <p className="mt-2">
            We only promote{" "}
            <strong className="text-white">Fantasy Sports</strong>. No Real
            Money Involvement.
          </p>
        </div>
      </footer> */}

      {/* Floating Chips */}
      <div className="fixed bottom-6 right-6 flex space-x-3">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: num * 0.2 }}
          >
            ${num}
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Button */}

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes text-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .drop-shadow-gold {
          filter: drop-shadow(0 0 12px rgba(255, 213, 0, 0.5));
        }
      `}</style>
    </div>
  );
}
