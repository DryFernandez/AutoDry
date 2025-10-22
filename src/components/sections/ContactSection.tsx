'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, CircularProgress, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            ¿Listo para <span className="text-[#E50914]">automatizar</span>?
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            Contáctanos y descubre cómo podemos transformar tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Envíanos un mensaje</h3>

            {success && (
              <Alert severity="success" className="mb-4">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </Alert>
            )}

            {error && (
              <Alert severity="error" className="mb-4">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <TextField
                fullWidth
                label="Nombre completo"
                variant="outlined"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E50914',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E50914',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#ff9800',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Empresa"
                variant="outlined"
                {...register('company')}
                error={!!errors.company}
                helperText={errors.company?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E50914',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E50914',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#ff9800',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E50914',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E50914',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#ff9800',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Mensaje"
                multiline
                rows={4}
                variant="outlined"
                {...register('message')}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#E50914',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E50914',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#ff9800',
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : <FaPaperPlane />}
                sx={{
                  backgroundColor: '#E50914',
                  padding: { xs: '12px', md: '14px' },
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 'bold',
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#b30710',
                  },
                  '&:disabled': {
                    backgroundColor: 'rgba(229, 9, 20, 0.5)',
                  },
                }}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Información de contacto</h3>
              <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                Estamos aquí para ayudarte a transformar tu negocio. Contáctanos por cualquiera de estos medios.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="bg-[#E50914] p-3 md:p-4 rounded-full flex-shrink-0">
                  <FaEnvelope className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Email</h4>
                  <p className="text-gray-400 text-xs md:text-sm">contacto@autodry.com</p>
                  <p className="text-gray-400 text-xs md:text-sm">soporte@autodry.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="bg-[#E50914] p-3 md:p-4 rounded-full flex-shrink-0">
                  <FaPhone className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Teléfono</h4>
                  <p className="text-gray-400 text-xs md:text-sm">+34 900 123 456</p>
                  <p className="text-gray-400 text-xs md:text-sm">Lun - Vie: 9:00 - 18:00</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="bg-[#E50914] p-3 md:p-4 rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">Ubicación</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Madrid, España</p>
                  <p className="text-gray-400 text-xs md:text-sm">Disponibilidad global</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-[#E50914] to-[#b30710] rounded-3xl p-6 md:p-8 mt-6 md:mt-8">
              <h4 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">
                Respuesta en menos de 24 horas
              </h4>
              <p className="text-sm md:text-base text-white/90">
                Nuestro equipo está comprometido en darte una respuesta rápida y efectiva. 
                La mayoría de consultas son respondidas en menos de 24 horas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
