'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Avatar } from '@mui/material';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    position: 'CEO - TechSolutions',
    company: 'TechSolutions',
    avatar: '👨‍💼',
    quote: 'Implementamos automatizaciones con n8n y redujimos el tiempo de procesamiento de pedidos en un 75%. Ahora podemos escalar sin preocuparnos por la capacidad operativa.',
    rating: 5,
    result: '75% reducción de tiempo',
  },
  {
    name: 'María González',
    position: 'Directora de Marketing - GrowthCo',
    company: 'GrowthCo',
    avatar: '👩‍💼',
    quote: 'Las automatizaciones de email marketing nos permitieron personalizar campañas a escala. Nuestro ROI aumentó un 120% en solo 3 meses.',
    rating: 5,
    result: '120% aumento en ROI',
  },
  {
    name: 'Roberto Sánchez',
    position: 'CTO - DataFlow',
    company: 'DataFlow',
    avatar: '👨‍💻',
    quote: 'La integración de nuestras bases de datos era un dolor de cabeza. Con las soluciones de AutoDry, ahora todo fluye automáticamente. Increíble servicio y soporte.',
    rating: 5,
    result: 'Sincronización en tiempo real',
  },
  {
    name: 'Ana Martínez',
    position: 'COO - E-commerce Plus',
    company: 'E-commerce Plus',
    avatar: '👩‍🦰',
    quote: 'Automatizar nuestro inventario y notificaciones fue la mejor decisión. Ahorramos más de 40 horas semanales que ahora dedicamos a estrategia.',
    rating: 5,
    result: '40 horas ahorradas/semana',
  },
  {
    name: 'Luis Fernández',
    position: 'Fundador - StartupX',
    company: 'StartupX',
    avatar: '👨‍🚀',
    quote: 'Como startup, necesitábamos eficiencia desde el día uno. Las automatizaciones nos permitieron competir con empresas mucho más grandes.',
    rating: 5,
    result: 'Competitividad empresarial',
  },
  {
    name: 'Patricia Ruiz',
    position: 'Gerente de Operaciones - LogisticsPro',
    company: 'LogisticsPro',
    avatar: '👩‍💼',
    quote: 'La automatización de reportes nos da visibilidad en tiempo real. Tomamos decisiones más rápidas y con datos precisos. Excelente inversión.',
    rating: 5,
    result: 'Decisiones basadas en datos',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="casos-exito" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Casos de <span className="text-[#E50914]">éxito</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre cómo nuestros clientes han transformado sus negocios con automatizaciones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#E50914',
                    boxShadow: '0 20px 60px rgba(229, 9, 20, 0.2)',
                  },
                }}
              >
                <CardContent className="p-6 md:p-8">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-[#E50914] text-2xl md:text-3xl mb-3 md:mb-4 opacity-50" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#E50914] text-sm md:text-base" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>

                  {/* Result Badge */}
                  <div className="mb-4 md:mb-6">
                    <span className="inline-block bg-[#E50914]/20 border border-[#E50914] text-[#E50914] text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-2 rounded-full">
                      {testimonial.result}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                    <Avatar
                      sx={{
                        width: { xs: 48, md: 56 },
                        height: { xs: 48, md: 56 },
                        backgroundColor: '#E50914',
                        fontSize: { xs: '24px', md: '28px' },
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonial.position}
                      </p>
                      <p className="text-[#E50914] text-xs md:text-sm font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20"
        >
          {[
            { number: '500+', label: 'Clientes satisfechos' },
            { number: '98%', label: 'Tasa de satisfacción' },
            { number: '1000+', label: 'Automatizaciones activas' },
            { number: '24/7', label: 'Soporte disponible' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-[#E50914] mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
