'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button, Switch, Chip } from '@mui/material';
import { FaCheck, FaRocket, FaStar, FaCrown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const plans = [
  {
    name: 'Starter',
    icon: <FaRocket size={40} />,
    description: 'Perfecto para comenzar a automatizar',
    monthlyPrice: 99,
    yearlyPrice: 950,
    popular: false,
    features: [
      'Hasta 5 automatizaciones',
      '1,000 ejecuciones/mes',
      'Integración con 50+ apps',
      'Soporte por email',
      'Actualizaciones gratuitas',
      'Dashboard básico',
    ],
  },
  {
    name: 'Professional',
    icon: <FaStar size={40} />,
    description: 'Para equipos que quieren escalar',
    monthlyPrice: 299,
    yearlyPrice: 2850,
    popular: true,
    features: [
      'Automatizaciones ilimitadas',
      '10,000 ejecuciones/mes',
      'Integración con 200+ apps',
      'Soporte prioritario 24/7',
      'Workflows personalizados',
      'Dashboard avanzado',
      'Análisis y reportes',
      'Webhooks ilimitados',
    ],
  },
  {
    name: 'Enterprise',
    icon: <FaCrown size={40} />,
    description: 'Soluciones a medida para empresas',
    monthlyPrice: 799,
    yearlyPrice: 7600,
    popular: false,
    features: [
      'Todo en Professional',
      'Ejecuciones ilimitadas',
      'Todas las integraciones',
      'Soporte dedicado',
      'Consultoría personalizada',
      'SLA garantizado',
      'Capacitación del equipo',
      'Implementación asistida',
      'Servidores dedicados',
    ],
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();

  const handleSelectPlan = (planName: string, price: number) => {
    router.push(`/register?plan=${planName.toLowerCase()}&price=${price}`);
  };

  return (
    <section id="precios" className="py-16 md:py-24 lg:py-32 bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Planes y <span className="text-[#E50914]">precios</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10">
            Elige el plan perfecto para tu negocio. Sin sorpresas, sin costos ocultos.
          </p>

          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-10 md:mb-14">
            <span className={`text-sm md:text-lg ${!isYearly ? 'text-white font-bold' : 'text-gray-400'}`}>
              Mensual
            </span>
            <Switch
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#E50914',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#E50914',
                },
              }}
            />
            <span className={`text-sm md:text-lg ${isYearly ? 'text-white font-bold' : 'text-gray-400'}`}>
              Anual
            </span>
            {isYearly && (
              <Chip
                label="Ahorra 20%"
                size="small"
                sx={{
                  backgroundColor: '#E50914',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                }}
              />
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Chip
                    label="MÁS POPULAR"
                    sx={{
                      backgroundColor: '#E50914',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: { xs: '0.65rem', md: '0.75rem' },
                      height: { xs: '24px', md: '28px' },
                    }}
                  />
                </div>
              )}

              <Card
                sx={{
                  height: '100%',
                  backgroundColor: plan.popular
                    ? 'rgba(229, 9, 20, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: plan.popular
                    ? '2px solid #E50914'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  position: 'relative',
                  transform: plan.popular ? { xs: 'scale(1)', md: 'scale(1.05)' } : 'scale(1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#E50914',
                    boxShadow: '0 20px 60px rgba(229, 9, 20, 0.3)',
                  },
                }}
              >
                <CardContent className="p-6 md:p-8">
                  {/* Icon */}
                  <motion.div
                    className="text-[#E50914] mb-3 md:mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {plan.icon}
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-5xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-sm md:text-base text-gray-400 ml-2">
                        /{isYearly ? 'año' : 'mes'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-xs md:text-sm text-gray-500 mt-2">
                        ${Math.round((plan.yearlyPrice / 12) * 100) / 100}/mes facturado anualmente
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3">
                        <FaCheck className="text-[#E50914] mt-1 flex-shrink-0 text-sm md:text-base" />
                        <span className="text-sm md:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    fullWidth
                    variant={plan.popular ? 'contained' : 'outlined'}
                    size="large"
                    onClick={() =>
                      handleSelectPlan(
                        plan.name,
                        isYearly ? plan.yearlyPrice : plan.monthlyPrice
                      )
                    }
                    sx={{
                      backgroundColor: plan.popular ? '#E50914' : 'transparent',
                      color: plan.popular ? 'white' : '#E50914',
                      borderColor: '#E50914',
                      padding: { xs: '12px', md: '14px' },
                      fontSize: { xs: '14px', md: '16px' },
                      fontWeight: 'bold',
                      borderRadius: '12px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: plan.popular ? '#b30710' : 'rgba(229, 9, 20, 0.1)',
                        borderColor: '#E50914',
                      },
                    }}
                  >
                    {plan.popular ? 'Comenzar ahora' : 'Seleccionar plan'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-20 text-center px-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            ¿Necesitas algo diferente?
          </h3>
          <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
            Contáctanos para crear un plan personalizado que se ajuste perfectamente a tus necesidades
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition-all text-sm md:text-base"
          >
            Contactar con ventas
          </button>
        </motion.div>
      </div>
    </section>
  );
}
