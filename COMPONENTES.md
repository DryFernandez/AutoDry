# 🎨 Componentes Visuales - AutoDry

Este documento describe los componentes visuales implementados en la plataforma AutoDry.

## 🎭 Animaciones con Framer Motion

### Hero Section
- **Entrada de elementos**: Los textos y botones aparecen con un efecto de fade-in y slide-up
- **Fondo animado**: Círculos difuminados con efecto de pulso
- **Iconos flotantes**: Animación de float en iconos decorativos
- **Scroll indicator**: Indicador animado en la parte inferior

### Servicios
- **Stagger children**: Las tarjetas aparecen en secuencia
- **Hover effects**: Escala y rotación en iconos al pasar el cursor
- **Card lift**: Las tarjetas se elevan al hacer hover

### Beneficios
- **Entrada lateral**: Los elementos entran desde la izquierda y derecha alternadamente
- **Rotación de iconos**: Los iconos rotan 360° al hacer hover
- **Glow effect**: Efecto de brillo al pasar el cursor

### Testimonios
- **Slide up**: Las tarjetas aparecen desde abajo
- **Hover lift**: Elevación suave al pasar el cursor
- **Rating stars**: Estrellas con color de marca

### Precios
- **Toggle animado**: Cambio suave entre mensual/anual
- **Scale on hover**: Tarjetas se agrandan al pasar el cursor
- **Popular badge**: Badge destacado para el plan recomendado

## 🎨 Paleta de Colores

```css
/* Colores Principales */
Rojo Primario: #E50914
Rojo Oscuro: #b30710
Negro: #000000
Blanco: #FFFFFF

/* Colores Secundarios */
Gris Oscuro: #1a1a1a
Gris Medio: #333333
Gris Claro: #999999

/* Estados */
Success: #4CAF50
Warning: #FF9800
Info: #2196F3
Error: #f44336
```

## 📱 Componentes Responsive

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Grid System
```tsx
// Servicios y Beneficios
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Testimonios
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Precios
grid-cols-1 md:grid-cols-3

// Stats
grid-cols-1 md:grid-cols-3 (Hero)
grid-cols-2 md:grid-cols-4 (Testimonials)
```

## 🎯 Componentes de Material UI Usados

### Inputs y Forms
- `TextField`: Con estilos personalizados (rojo/negro)
- `Button`: Variantes contained/outlined
- `Switch`: Para toggle mensual/anual
- `IconButton`: Para show/hide password

### Feedback
- `Alert`: Mensajes de éxito/error
- `CircularProgress`: Indicadores de carga
- `Chip`: Badges y etiquetas

### Layouts
- `Card` / `CardContent`: Contenedores de información
- `AppBar` / `Toolbar`: Navegación principal
- `Drawer`: Menú móvil
- `Avatar`: Para testimonios

## 🎨 Efectos Visuales Especiales

### Glassmorphism
```tsx
backgroundColor: 'rgba(255, 255, 255, 0.05)',
backdropFilter: 'blur(10px)',
border: '1px solid rgba(255, 255, 255, 0.1)',
```

### Gradientes
```tsx
// Rojo gradiente
background: 'linear-gradient(to right, #E50914, #b30710)'

// Negro a gris
background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
```

### Sombras
```tsx
// Sombra roja brillante
boxShadow: '0 10px 40px rgba(229, 9, 20, 0.4)'

// Sombra elevada
boxShadow: '0 20px 60px rgba(229, 9, 20, 0.3)'
```

## 🔤 Tipografía

### Fuentes
- **Principal**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

### Tamaños
```tsx
// Headings
h1: 'text-5xl md:text-7xl' (3rem - 4.5rem)
h2: 'text-4xl md:text-5xl' (2.5rem - 3rem)
h3: 'text-2xl md:text-3xl' (1.5rem - 2rem)

// Body
body: 'text-base' (1rem)
large: 'text-xl md:text-2xl' (1.25rem - 1.5rem)
small: 'text-sm' (0.875rem)
```

## 🎬 Animaciones CSS Custom

### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## 🎨 Componentes Inspirados en Uiverse.io

### Service Cards
- Glassmorphism effect
- Hover border color change
- Icon animation on hover
- Smooth transitions

### Testimonial Cards
- Quote icon decorativo
- Star ratings
- Result badges
- Author avatar

### Pricing Cards
- Popular badge destacado
- Feature list con checkmarks
- CTA buttons diferenciados
- Scale effect destacado

## 📊 Iconos Utilizados

### React Icons
- **FaRobot**: Logo principal
- **FaRocket**: CTA buttons
- **FaCogs, FaChartLine**: Decorativos
- **FaCheck**: Listas de características
- **FaEnvelope, FaPhone, FaMapMarkerAlt**: Contacto
- **FaStar**: Ratings
- **FaCrown, FaStar, FaRocket**: Planes

### Material UI Icons
- **MenuIcon**: Menú móvil
- **CloseIcon**: Cerrar drawer
- **Visibility/VisibilityOff**: Password toggle

### Simple Icons
- **SiN8N**: Logo de n8n

## 🎯 Interacciones

### Hover Effects
- Scale (1.05, 1.1)
- Color change (border, background)
- Shadow increase
- Icon rotation
- Glow effects

### Click Effects
- Scale down (0.95)
- Ripple (Material UI)
- Color change
- Loading states

### Scroll Effects
- Fade in on viewport
- Slide animations
- Stagger children
- Parallax backgrounds

## 📱 Navegación

### Smooth Scroll
```javascript
scrollIntoView({ behavior: 'smooth' })
```

### Fixed Header
- Transparente al inicio
- Fondo sólido al hacer scroll
- Cambio de elevación
- Backdrop blur

### Mobile Menu
- Drawer desde la derecha
- Overlay oscuro
- Transiciones suaves
- Links con auto-close

## 🎨 Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #E50914;
  border-radius: 5px;
}
```

## ✨ Detalles Especiales

### Loading States
- Spinner en botones
- Skeleton screens (futuro)
- Progress indicators

### Empty States
- Ilustraciones (futuro)
- Mensajes amigables
- CTAs claros

### Error States
- Alerts de MUI
- Mensajes descriptivos
- Opciones de recuperación

---

## 🚀 Mejoras Futuras

- [ ] Dark/Light mode toggle
- [ ] Más animaciones con scroll (AOS)
- [ ] Micro-interacciones adicionales
- [ ] Skeleton loading screens
- [ ] Toast notifications
- [ ] Confetti en acciones exitosas
- [ ] Partículas de fondo
- [ ] Modo de alto contraste
- [ ] Temas personalizables
