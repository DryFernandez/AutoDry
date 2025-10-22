'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRobot, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { SiN8N } from 'react-icons/si';

const footerLinks = {
  Producto: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Precios', href: '#precios' },
    { label: 'Casos de éxito', href: '#casos-exito' },
    { label: 'Documentación', href: '#' },
  ],
  Empresa: [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carreras', href: '#' },
    { label: 'Contacto', href: '#contacto' },
  ],
  Legal: [
    { label: 'Términos de uso', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Política de cookies', href: '#' },
    { label: 'Aviso legal', href: '#' },
  ],
  Recursos: [
    { label: 'Centro de ayuda', href: '#' },
    { label: 'Tutoriales', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Estado del servicio', href: '#' },
  ],
};

const socialLinks = [
  { icon: <FaTwitter size={24} />, href: '#', label: 'Twitter' },
  { icon: <FaLinkedin size={24} />, href: '#', label: 'LinkedIn' },
  { icon: <FaGithub size={24} />, href: '#', label: 'GitHub' },
  { icon: <FaYoutube size={24} />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <FaRobot className="text-[#E50914] text-4xl" />
              <span className="font-bold text-2xl text-white">
                Auto<span className="text-[#E50914]">Dry</span>
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Automatiza tu negocio con soluciones inteligentes basadas en n8n. 
              Transforma procesos manuales en flujos automatizados.
            </p>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 inline-flex">
              <SiN8N className="text-[#E50914] text-xl" />
              <span className="text-sm text-gray-400">Powered by n8n</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        if (link.href.startsWith('#')) {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="text-gray-400 hover:text-[#E50914] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
  <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 AutoDry. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/5 hover:bg-[#E50914] p-3 rounded-full transition-all"
                aria-label={social.label}
              >
                <span className="text-white">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            AutoDry utiliza n8n para crear automatizaciones potentes y escalables. 
            Todos los datos son procesados de forma segura y cumpliendo con GDPR.
          </p>
        </div>
      </div>
    </footer>
  );
}
