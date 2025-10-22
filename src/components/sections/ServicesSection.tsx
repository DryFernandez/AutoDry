'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography } from '@mui/material';
import { 
  FaEnvelope, 
  FaDatabase, 
  FaShoppingCart, 
  FaChartBar, 
  FaSlack, 
  FaRobot 
} from 'react-icons/fa';
import { SiN8N } from 'react-icons/si';

const services = [
  {
    icon: <FaEnvelope size={32} />,
    title: 'Automatización de Email Marketing',
    description: 'Conecta tu CRM con plataformas de email marketing. Envía campañas personalizadas automáticamente basadas en el comportamiento del usuario.',
    color: '#E50914',
  },
  {
    icon: <FaDatabase size={32} />,
    title: 'Integración de Bases de Datos',
    description: 'Sincroniza datos entre diferentes sistemas en tiempo real. Migra, actualiza y respalda información sin intervención manual.',
    color: '#E50914',
  },
  {
    icon: <FaShoppingCart size={32} />,
    title: 'E-commerce Automatizado',
    description: 'Automatiza procesos de pedidos, inventario y notificaciones. Integra tu tienda online con sistemas de logística y contabilidad.',
    color: '#E50914',
  },
  {
    icon: <FaChartBar size={32} />,
    title: 'Reportes y Análisis',
    description: 'Genera reportes automáticos con datos de múltiples fuentes. Visualiza KPIs en tiempo real y recibe alertas inteligentes.',
    color: '#E50914',
  },
  {
    icon: <FaSlack size={32} />,
    title: 'Notificaciones Inteligentes',
    description: 'Configura alertas automáticas en Slack, Teams o Discord. Mantén a tu equipo informado sin esfuerzo manual.',
    color: '#E50914',
  },
  {
    icon: <FaRobot size={32} />,
    title: 'Workflows Personalizados',
    description: 'Creamos flujos de trabajo a medida para tu negocio. Cualquier proceso repetitivo puede ser automatizado con n8n.',
    color: '#E50914',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 justify-around flex flex-col min-h-screen md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full h-[90vh] justify-around flex flex-col  max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            Automatizaciones que <span className="text-[#E50914]">transforman</span>
          </h2>
          <p className="text-base md:text-xl  text-gray-400 max-w-3xl mx-auto">
            Soluciones personalizadas con n8n para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className="h-full group cursor-pointer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: '#E50914',
                    boxShadow: '0 20px 60px rgba(229, 9, 20, 0.3)',
                  },
                }}
              >
                <CardContent className="p-4 md:p-6">
                  <motion.div
                    className="mb-3 md:mb-4 text-[#E50914]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-bold mb-2 md:mb-3 text-white group-hover:text-[#E50914] transition-colors"
                    sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    className="text-gray-400 leading-relaxed"
                    sx={{ fontSize: { xs: '0.813rem', md: '0.938rem' } }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8">
            ¿No encuentras lo que buscas?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#E50914] hover:bg-[#b30710] text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl text-base md:text-lg"
          >
            Contáctanos para una solución personalizada
          </button>
        </motion.div>
      </div>
    </section>
  );
}
