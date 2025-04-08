import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "@fontsource/luckiest-guy";
import "@fontsource/poppins";
import CricketBanner from "./components/CricketBanner";
import FooterDisclaimer from "./components/Footer";

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [jackpotAmount, setJackpotAmount] = useState(1000000);

  useEffect(() => {
    setIsMounted(true);
    // Initialize jackpot timer
    const jackpotTimer = setInterval(() => {
      setJackpotAmount((prev) => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    return () => clearInterval(jackpotTimer);
  }, []);

  const handleWhatsAppRedirect = () => {
    window.location.href =
      "https://wa.me/639072368736?text=I%20want%20to%20create%20an%20account%20and%20earn%20with%20you";
  };

  const websites = [
    {
      name: "AllPanelExch",
      url: "https://Allpanelexch.com/",
      image: "/images/allpanelexch.png",
    },
    {
      name: "Nice7777",
      url: "https://nice7777.fun/",
      image: "/images/777fun.png",
    },
    {
      name: "infinity777",
      url: "https://infinity777.com/",
      image: "/images/infinity777.jpeg",
    },
    {
      name: "SpiderPro",
      url: "https://spiderpro.co/",
      image: "/images/spider.jpeg",
    },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-poppins overflow-x-hidden">
      {/* Floating Money Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: "-100vh",
              rotate: Math.random() * 360,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {["💰", "💸", "💵", "💎"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      {/* Rotating Roulette Background */}
      <motion.div
        className="fixed -left-1/4 -top-1/4 w-[150%] h-[150%] opacity-5 pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-[url('/images/roulette.png')] bg-cover bg-center" />
      </motion.div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex justify-center mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic">
            <span className="glow-text text-white tracking-wider">BRV</span>
            <span className="gaming-text tracking-normal">GAMINGS</span>
          </h1>
        </div>
        <a onClick={handleWhatsAppRedirect}>
          <motion.div
            className="flex justify-center pt-4 pb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative cursor-pointer neon-border">
              <img
                src="/images/casino1.png"
                alt="Premium Casino"
                className="w-[134px] h-[134px] drop-shadow-xl border-1 drop-shadow-gold rounded-full"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r rounded-full opacity-0"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </a>

        {/* CTA Button */}
        <div className="text-center mb-12 px-4">
          <motion.button
            onClick={handleWhatsAppRedirect}
            className="relative inline-flex cursor-pointer items-center justify-center px-6 py-3 md:px-8 md:py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-green-500 to-blue-600 rounded-full hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/30 neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-3">🎰</span>
            START EARNING NOW - GET YOUR ACCOUNT!
            <span className="ml-3">🎲</span>
            <div className="absolute inset-0 rounded-full animate-pulse-slow border-2 border-white/30" />
          </motion.button>
        </div>

        <div className="w-full">
          <a onClick={handleWhatsAppRedirect} className="cursor-pointer w-full">
            <img
              src="/images/ipl.png"
              alt="Cricket"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-6xl">
          {/* Jackpot Display */}
          <div className="mb-12 text-center">
            <motion.div
              className="inline-block bg-black/70 px-6 py-4 rounded-2xl border-2 border-yellow-400 shadow-lg shadow-yellow-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-yellow-300 mb-2">
                LIVE JACKPOT
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl md:text-4xl font-mono font-bold text-green-300 animate-pulse">
                  ₹{jackpotAmount.toLocaleString()}
                </span>
                <div className="w-4 h-4 bg-red-400 rounded-full animate-ping" />
              </div>
            </motion.div>
          </div>

          {/* Casino Platforms Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h1 className="text-4xl mt-12 font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-yellow-500 animate-text-shine font-luckiest-guy">
              PREMIUM BETTING PLATFORMS
            </h1>

            {/* Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {websites.map((site, index) => (
                <motion.a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-2xl transition-all duration-300 shadow-xl h-48 md:h-64"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1 font-luckiest-guy">
                      {site.name}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-200">Explore Now</span>
                      <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-yellow-400/50 group-hover:border-red-500/70 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <CricketBanner />
        </div>

        {/* Floating Chips */}
        <div className="fixed bottom-6 right-6 flex space-x-3 z-20">
          {["$", "$", "$"].map((symbol, index) => (
            <motion.div
              key={index}
              className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                confetti({
                  particleCount: 30,
                  spread: 40,
                  origin: { x: 0.9, y: 0.9 },
                });
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Quick Contact Button */}
        <button
          className="fixed bottom-4 left-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200 ease-in-out z-20 flex items-center"
          onClick={handleWhatsAppRedirect}
        >
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            className="w-[34px] h-[34px] mr-2"
          />
          Get your ID
        </button>
      </div>

      <FooterDisclaimer />

      {/* Global Styles */}
      <style>{`
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
        .neon-glow {
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.7),
            0 0 30px rgba(74, 222, 128, 0.4);
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .font-luckiest-guy {
          font-family: 'Luckiest Guy', cursive;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default App;
