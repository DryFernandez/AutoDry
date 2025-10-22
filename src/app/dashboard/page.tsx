'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Card, CardContent, Button, Chip } from '@mui/material';
import { 
  FaRobot, 
  FaChartLine, 
  FaCog, 
  FaCheckCircle, 
  FaClock, 
  FaExclamationTriangle,
  FaPlus 
} from 'react-icons/fa';
import Link from 'next/link';

const mockAutomations = [
  {
    id: 1,
    name: 'Email Marketing Automation',
    status: 'active',
    executions: 1234,
    lastRun: '2 horas',
    success: 98,
  },
  {
    id: 2,
    name: 'Database Sync',
    status: 'active',
    executions: 856,
    lastRun: '30 minutos',
    success: 100,
  },
  {
    id: 3,
    name: 'E-commerce Orders',
    status: 'paused',
    executions: 432,
    lastRun: '1 día',
    success: 95,
  },
];

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E50914] to-[#b30710] border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <FaRobot className="text-white text-4xl" />
                <span className="font-bold text-2xl text-white">
                  Auto<span className="text-black">Dry</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white">Hola, {user.displayName || 'Usuario'}</span>
              <Button
                onClick={() => logout()}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Panel de Control
          </h1>
          <p className="text-xl text-gray-400">
            Gestiona tus automatizaciones y monitorea su rendimiento
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { 
              label: 'Automatizaciones Activas', 
              value: '3', 
              icon: <FaRobot size={30} />,
              color: '#E50914' 
            },
            { 
              label: 'Total Ejecuciones', 
              value: '2,522', 
              icon: <FaChartLine size={30} />,
              color: '#4CAF50' 
            },
            { 
              label: 'Tasa de Éxito', 
              value: '98%', 
              icon: <FaCheckCircle size={30} />,
              color: '#2196F3' 
            },
            { 
              label: 'Tiempo Ahorrado', 
              value: '127h', 
              icon: <FaClock size={30} />,
              color: '#FF9800' 
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div style={{ color: stat.color }}>{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Automations List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Mis Automatizaciones</h2>
            <Button
              variant="contained"
              startIcon={<FaPlus />}
              sx={{
                backgroundColor: '#E50914',
                '&:hover': {
                  backgroundColor: '#b30710',
                },
              }}
            >
              Nueva Automatización
            </Button>
          </div>

          <div className="space-y-4">
            {mockAutomations.map((automation, index) => (
              <motion.div
                key={automation.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    '&:hover': {
                      borderColor: '#E50914',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {automation.name}
                          </h3>
                          <Chip
                            label={automation.status === 'active' ? 'Activa' : 'Pausada'}
                            size="small"
                            sx={{
                              backgroundColor: automation.status === 'active' ? '#4CAF50' : '#FF9800',
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
                          <div>
                            <span className="block text-xs text-gray-500">Ejecuciones</span>
                            <span className="text-white font-semibold">{automation.executions}</span>
                          </div>
                          <div>
                            <span className="block text-xs text-gray-500">Última ejecución</span>
                            <span className="text-white font-semibold">hace {automation.lastRun}</span>
                          </div>
                          <div>
                            <span className="block text-xs text-gray-500">Tasa de éxito</span>
                            <span className="text-white font-semibold">{automation.success}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<FaCog />}
                          sx={{
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            '&:hover': {
                              borderColor: '#E50914',
                              backgroundColor: 'rgba(229, 9, 20, 0.1)',
                            },
                          }}
                        >
                          Configurar
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: '#E50914',
                            '&:hover': {
                              backgroundColor: '#b30710',
                            },
                          }}
                        >
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card
            sx={{
              backgroundColor: 'rgba(229, 9, 20, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #E50914',
              borderRadius: '16px',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: '0 10px 40px rgba(229, 9, 20, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CardContent className="p-6 text-center">
              <FaPlus className="text-[#E50914] text-4xl mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                Crear Automatización
              </h3>
              <p className="text-gray-400 text-sm">
                Comienza un nuevo flujo de trabajo
              </p>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#E50914',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CardContent className="p-6 text-center">
              <FaChartLine className="text-[#E50914] text-4xl mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                Ver Reportes
              </h3>
              <p className="text-gray-400 text-sm">
                Analiza el rendimiento
              </p>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#E50914',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CardContent className="p-6 text-center">
              <FaCog className="text-[#E50914] text-4xl mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                Configuración
              </h3>
              <p className="text-gray-400 text-sm">
                Ajusta tu cuenta
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
