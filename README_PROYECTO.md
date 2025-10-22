# AutoDry - Plataforma de Automatización con n8n

Una plataforma profesional de Next.js para vender servicios de automatización empresarial utilizando n8n.

## 🚀 Características

- **Diseño Moderno**: Interfaz profesional con colores rojo (#E50914) y negro
- **Componentes Animados**: Framer Motion para animaciones suaves
- **Material UI**: Componentes visuales de alta calidad
- **Autenticación**: Sistema completo con Firebase Auth
- **Pagos**: Integración con Stripe
- **Responsive**: Diseño adaptable a todos los dispositivos
- **SEO Optimizado**: Meta tags y Google Analytics
- **Dashboard**: Panel de control para usuarios

## 📦 Tecnologías Utilizadas

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Material UI (MUI)
- Framer Motion
- React Icons
- Firebase Authentication
- Stripe (pagos)
- React Hook Form + Zod (validación)

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd AutoDry
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto (usa `.env.local.example` como referencia):

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_publishable_key
STRIPE_SECRET_KEY=tu_stripe_secret_key

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=tu_ga_measurement_id
```

4. **Ejecutar en desarrollo**
```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
AutoDry/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/          # API route para formulario de contacto
│   │   ├── dashboard/            # Panel de usuario
│   │   ├── login/                # Página de inicio de sesión
│   │   ├── register/             # Página de registro
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Página de inicio
│   │   └── globals.css           # Estilos globales
│   ├── components/
│   │   └── sections/
│   │       ├── Header.tsx        # Navegación principal
│   │       ├── HeroSection.tsx   # Sección hero
│   │       ├── ServicesSection.tsx
│   │       ├── BenefitsSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── PricingSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── Footer.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx       # Contexto de autenticación
│   └── lib/
│       ├── firebase.ts           # Configuración Firebase
│       └── stripe.ts             # Configuración Stripe
├── public/                       # Archivos estáticos
└── package.json
```

## 🎨 Secciones de la Página

1. **Header**: Navegación fija con links a todas las secciones
2. **Hero Section**: Presentación principal con CTA
3. **Servicios**: Tarjetas animadas con servicios de automatización
4. **Beneficios**: Lista de beneficios con iconos y animaciones
5. **Casos de Éxito**: Testimonios de clientes
6. **Precios**: Planes con toggle mensual/anual
7. **Contacto**: Formulario validado
8. **Footer**: Enlaces y redes sociales

## 🔐 Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Authentication → Email/Password
3. Copia las credenciales a `.env.local`

## 💳 Configuración de Stripe

1. Crea una cuenta en [Stripe](https://stripe.com/)
2. Obtén las claves API (publishable y secret)
3. Configura productos y precios
4. Agrega las claves a `.env.local`

## 📧 Configuración del Formulario de Contacto

El formulario actualmente solo registra los datos en la consola. Para enviar emails reales, puedes integrar:

- **Nodemailer**: Para enviar emails directamente
- **SendGrid**: Servicio de email transaccional
- **Mailgun**: Alternativa a SendGrid
- **Formspree**: Solución sin backend

Edita `/src/app/api/contact/route.ts` para implementar tu solución preferida.

## 📊 Google Analytics

1. Crea una propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtén el Measurement ID (G-XXXXXXXXXX)
3. Agrégalo a `.env.local`

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
pnpm build
vercel --prod
```

### Otros servicios

```bash
pnpm build
pnpm start
```

## 🎯 Próximos Pasos

- [ ] Completar integración de Stripe para pagos reales
- [ ] Implementar envío de emails en el formulario de contacto
- [ ] Agregar más páginas (Blog, Documentación, etc.)
- [ ] Implementar dashboard completo con gestión de automatizaciones
- [ ] Conectar con API de n8n
- [ ] Agregar tests unitarios y E2E

## 📝 Notas Importantes

- **Firebase**: Necesitas crear un proyecto y habilitar autenticación
- **Stripe**: Para pagos reales, configura webhooks
- **Environment Variables**: NUNCA commits archivos `.env.local`
- **Producción**: Asegúrate de configurar todas las variables de entorno en tu servicio de hosting

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 📞 Contacto

Para más información, visita [tu-sitio-web.com](https://tu-sitio-web.com)

---

Hecho con ❤️ y ⚡ por AutoDry
