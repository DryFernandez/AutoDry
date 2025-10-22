'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { FaRobot } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Casos de Éxito', href: '#casos-exito' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  if (!mounted) {
    return null;
  }

  const drawer = (
    <div className="h-full w-full text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <FaRobot className="text-[#E50914] text-3xl" />
          <span className="font-bold text-xl">AutoDry</span>
        </div>
        <IconButton onClick={handleDrawerToggle} className="text-white">
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="cursor-pointer hover:bg-[#E50914] rounded-lg mb-2 transition-all"
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {user ? (
          <>
            <ListItem
              component={Link}
              href="/dashboard"
              className="cursor-pointer hover:bg-[#E50914] rounded-lg mb-2"
            >
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              onClick={() => logout()}
              className="cursor-pointer hover:bg-[#E50914] rounded-lg"
            >
              <ListItemText primary="Cerrar Sesión" />
            </ListItem>
          </>
        ) : (
          <ListItem
            component={Link}
            href="/login"
            className="cursor-pointer hover:bg-[#E50914] rounded-lg"
          >
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        color="transparent"
        className={`transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        elevation={scrolled ? 4 : 0}
      >
                <Toolbar className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="w-full grid grid-cols-3 items-center">
            {/* Left: Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 justify-start cursor-pointer"
              onClick={() => scrollToSection('#inicio')}
            >
              <FaRobot className="text-[#E50914] text-3xl md:text-4xl" />
              <span className="font-bold text-xl md:text-2xl text-white">
                Auto<span className="text-[#E50914]">Dry</span>
              </span>
            </motion.div>

            {/* Center: Nav items */}
            <div className="hidden md:flex items-center justify-center  gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-[#E50914] transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right: Auth / Menu */}
            <div className="hidden md:flex items-center justify-end gap-3">
              {user ? (
                <>
                  <Button
                    component={Link}
                    href="/dashboard"
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: '#E50914',
                      '&:hover': {
                        borderColor: '#E50914',
                        backgroundColor: 'rgba(229, 9, 20, 0.1)',
                      },
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    onClick={() => logout()}
                    variant="contained"
                    sx={{
                      backgroundColor: '#E50914',
                      '&:hover': {
                        backgroundColor: '#b30710',
                      },
                    }}
                  >
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <Button
                  component={Link}
                  href="/login"
                  variant="contained"
                  sx={{
                    backgroundColor: '#E50914',
                    '&:hover': {
                      backgroundColor: '#b30710',
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden col-span-1 col-start-3 flex justify-end">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="text-white"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
