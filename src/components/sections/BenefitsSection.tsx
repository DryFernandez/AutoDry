"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaDollarSign,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaClock size={40} />,
    title: "Ahorra hasta 80% de tiempo",
    description:
      "Libera a tu equipo de tareas repetitivas y enfócate en lo que realmente importa.",
  },
  {
    icon: <FaDollarSign size={40} />,
    title: "Reduce costos operativos",
    description:
      "Minimiza errores humanos y optimiza recursos con procesos automatizados.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Escala tu negocio",
    description:
      "Crece sin límites. Las automatizaciones se adaptan a tu crecimiento.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Mayor precisión y control",
    description:
      "Elimina errores manuales y mantén tus datos siempre actualizados.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Mejora la productividad",
    description:
      "Tu equipo puede enfocarse en tareas estratégicas de alto valor y rendimiento.",
  },
  {
    icon: <FaCheckCircle size={40} />,
    title: "Integración total",
    description:
      "Conecta todas tus herramientas favoritas en un solo flujo de trabajo.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 h-screen md:py-24 lg:py-32 bg-black flex items-center">
      <div className="w-full max-w-7xl flex flex-col justify-around h-[90vh] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            ¿Por qué automatizar con <span className="text-[#E50914]">n8n</span>
            ?
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre los beneficios que transformarán tu forma de trabajar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 h-[40vh] md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="flex flex-col items-center justify-center  bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10 h-full hover:border-[#E50914] transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#E50914] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    className="text-[#E50914] mb-3 md:mb-4 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {benefit.icon}
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                    {benefit.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed relative z-10">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 bg-gradient-to-r from-[#E50914] to-[#b30710] rounded-3xl p-10 md:p-14 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 h-[14vh] flex flex-col justify-center items-center">
            <h3 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-base md:text-lg lg:text-1xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto">
              Únete a más de 500 empresas que ya están automatizando sus
              procesos con n8n
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#precios");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white w-[15%] text-[#E50914] font-bold py-4 px-10 md:py-5 md:px-12 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg"
            >
              Ver planes y precios
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
