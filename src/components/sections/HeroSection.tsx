'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { FaRocket, FaCogs, FaChartLine } from 'react-icons/fa';
import { SiN8N } from 'react-icons/si';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-black text-white overflow-hidden flex items-center pt-24 md:pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-[#E50914] rounded-full filter blur-[100px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-[#E50914] rounded-full filter blur-[120px] md:blur-[150px] animate-pulse delay-700"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="hidden lg:block absolute top-32 right-20 text-[#E50914] opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FaCogs size={60} />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute bottom-32 left-20 text-[#E50914] opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaChartLine size={50} />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#E50914]/10 border border-[#E50914] rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <SiN8N className="text-[#E50914] text-xl md:text-2xl" />
              <span className="text-xs md:text-sm font-semibold">Powered by n8n</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight"
          >
            Automatiza tu negocio con{' '}
            <span className="text-[#E50914]">inteligencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed"
          >
            Transformamos procesos manuales en flujos automatizados que ahorran tiempo, 
            reducen errores y aumentan tu productividad hasta en un 80%.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToContact}
              startIcon={<FaRocket />}
              sx={{
                backgroundColor: '#E50914',
                padding: { xs: '12px 24px', md: '16px 40px' },
                fontSize: { xs: '15px', md: '18px' },
                fontWeight: 'bold',
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 10px 40px rgba(229, 9, 20, 0.4)',
                '&:hover': {
                  backgroundColor: '#b30710',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 50px rgba(229, 9, 20, 0.6)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Solicita tu automatización
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                const element = document.querySelector('#servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                color: 'white',
                borderColor: 'white',
                padding: { xs: '12px 24px', md: '16px 40px' },
                fontSize: { xs: '15px', md: '18px' },
                fontWeight: 'bold',
                borderRadius: '50px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#E50914',
                  backgroundColor: 'rgba(229, 9, 20, 0.1)',
                  color: '#E50914',
                },
              }}
            >
              Ver servicios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mt-16 md:mt-24"
          >
            {[
              { number: '500+', label: 'Automatizaciones creadas' },
              { number: '80%', label: 'Reducción de tiempo' },
              { number: '24/7', label: 'Soporte dedicado' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#E50914] transition-all"
              >
                <div className="text-2xl md:text-4xl font-bold text-[#E50914] mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#E50914] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
