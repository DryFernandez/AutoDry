# 🚀 Guía de Configuración Completa - AutoDry

## 📋 Índice

1. [Requisitos Previos](#requisitos-previos)
2. [Configuración de Firebase](#configuración-de-firebase)
3. [Configuración de Stripe](#configuración-de-stripe)
4. [Configuración de Google Analytics](#configuración-de-google-analytics)
5. [Variables de Entorno](#variables-de-entorno)
6. [Primer Inicio](#primer-inicio)
7. [Despliegue](#despliegue)

---

## 1. Requisitos Previos

Asegúrate de tener instalado:

- **Node.js**: v18 o superior
- **pnpm**: v8 o superior (o npm/yarn)
- **Git**: Para control de versiones

```bash
# Verificar versiones
node --version  # v18+
pnpm --version  # v8+
```

---

## 2. Configuración de Firebase

### Paso 1: Crear Proyecto

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Click en "Agregar proyecto"
3. Nombre del proyecto: `AutoDry` (o el que prefieras)
4. Desactiva Google Analytics (o actívalo si lo prefieres)
5. Click en "Crear proyecto"

### Paso 2: Registrar App Web

1. En el panel del proyecto, click en el ícono web `</>`
2. Nombre de la app: `AutoDry Web`
3. NO marques "Firebase Hosting" por ahora
4. Click en "Registrar app"
5. **GUARDA** las credenciales que aparecen:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "autodry-xxxxx.firebaseapp.com",
  projectId: "autodry-xxxxx",
  storageBucket: "autodry-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxx"
};
```

### Paso 3: Habilitar Authentication

1. En el menú lateral, ve a **Authentication**
2. Click en "Comenzar"
3. En la pestaña "Sign-in method":
   - Click en "Email/Password"
   - Activa el switch "Habilitar"
   - Click en "Guardar"

### Paso 4: Configurar Firestore (Opcional, para guardar datos de usuarios)

1. En el menú lateral, ve a **Firestore Database**
2. Click en "Crear base de datos"
3. Selecciona "Modo de producción"
4. Elige la ubicación más cercana
5. Click en "Habilitar"

### Paso 5: Reglas de Seguridad (Firestore)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /automations/{automationId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 3. Configuración de Stripe

### Paso 1: Crear Cuenta

1. Ve a [Stripe](https://stripe.com/)
2. Click en "Comenzar ahora"
3. Completa el registro

### Paso 2: Obtener Claves API

1. En el dashboard, ve a **Developers** → **API keys**
2. Encontrarás dos claves:
   - **Publishable key**: `pk_test_...` (para el frontend)
   - **Secret key**: `sk_test_...` (para el backend)
3. **GUARDA** ambas claves

### Paso 3: Crear Productos

1. Ve a **Products** → **Add product**
2. Crea tres productos:

#### Producto 1: Starter
- Nombre: `Starter Plan`
- Descripción: `Perfecto para comenzar a automatizar`
- Precio: `$99/mes` o `$950/año`
- Tipo: Recurring

#### Producto 2: Professional
- Nombre: `Professional Plan`
- Descripción: `Para equipos que quieren escalar`
- Precio: `$299/mes` o `$2850/año`
- Tipo: Recurring

#### Producto 3: Enterprise
- Nombre: `Enterprise Plan`
- Descripción: `Soluciones a medida para empresas`
- Precio: `$799/mes` o `$7600/año`
- Tipo: Recurring

### Paso 4: Configurar Webhooks (Opcional)

1. Ve a **Developers** → **Webhooks**
2. Click en "Add endpoint"
3. URL: `https://tu-dominio.com/api/webhooks/stripe`
4. Eventos a escuchar:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

---

## 4. Configuración de Google Analytics

### Paso 1: Crear Propiedad

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Click en "Admin" (engranaje)
3. Click en "Crear propiedad"
4. Nombre: `AutoDry`
5. Zona horaria y moneda
6. Click en "Siguiente"

### Paso 2: Configurar Flujo de Datos

1. Selecciona "Web"
2. URL: `https://tu-dominio.com`
3. Nombre del flujo: `AutoDry Website`
4. Click en "Crear flujo"

### Paso 3: Obtener Measurement ID

1. En la página del flujo de datos, encontrarás el **Measurement ID**
2. Formato: `G-XXXXXXXXXX`
3. **GUARDA** este ID

---

## 5. Variables de Entorno

### Paso 1: Crear Archivo

En la raíz del proyecto, crea `.env.local`:

```bash
touch .env.local
```

### Paso 2: Agregar Variables

Copia esto y completa con tus datos:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=autodry-xxxxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=autodry-xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=autodry-xxxxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:xxxxx

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### ⚠️ Importante

- **NUNCA** subas `.env.local` a Git
- Ya está en `.gitignore`
- Usa `.env.local.example` como referencia

---

## 6. Primer Inicio

### Paso 1: Instalar Dependencias

```bash
pnpm install
```

### Paso 2: Verificar Configuración

```bash
# Verificar que no hay errores de TypeScript
pnpm build
```

### Paso 3: Ejecutar en Desarrollo

```bash
pnpm dev
```

### Paso 4: Abrir en Navegador

```
http://localhost:3000
```

### Paso 5: Probar Funcionalidades

✅ **Navegación**
- Verifica que todos los links funcionen
- Prueba el scroll suave
- Abre el menú móvil (responsive)

✅ **Registro**
- Ve a `/register`
- Crea una cuenta de prueba
- Verifica que llegues al dashboard

✅ **Login**
- Cierra sesión
- Ve a `/login`
- Inicia sesión con la cuenta creada

✅ **Dashboard**
- Verifica que veas tus datos
- Explora las secciones

✅ **Formulario de Contacto**
- Llena el formulario
- Verifica en la consola del navegador
- Debería registrar el mensaje

---

## 7. Despliegue

### Opción A: Vercel (Recomendado)

1. **Instalar Vercel CLI**
```bash
pnpm install -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Desplegar**
```bash
vercel
```

4. **Configurar Variables de Entorno**
- Ve al dashboard de Vercel
- Selecciona tu proyecto
- Settings → Environment Variables
- Agrega TODAS las variables de `.env.local`

5. **Redeployar**
```bash
vercel --prod
```

### Opción B: Netlify

1. **Instalar Netlify CLI**
```bash
pnpm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Build**
```bash
pnpm build
```

4. **Deploy**
```bash
netlify deploy --prod
```

### Opción C: Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
```

```bash
# Build
docker build -t autodry .

# Run
docker run -p 3000:3000 --env-file .env.local autodry
```

---

## 🔧 Solución de Problemas

### Error: Firebase not configured
**Solución**: Verifica que todas las variables de Firebase estén en `.env.local`

### Error: Stripe key not found
**Solución**: Asegúrate de que `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` esté configurada

### Error: Module not found
**Solución**: 
```bash
rm -rf node_modules
pnpm install
```

### Error: Port 3000 in use
**Solución**: 
```bash
# Matar proceso en puerto 3000
lsof -ti:3000 | xargs kill -9
# O usar otro puerto
pnpm dev -- -p 3001
```

---

## 📞 Soporte

Si tienes problemas:

1. Revisa la [documentación de Next.js](https://nextjs.org/docs)
2. Consulta la [documentación de Firebase](https://firebase.google.com/docs)
3. Revisa la [documentación de Stripe](https://stripe.com/docs)
4. Abre un issue en el repositorio

---

## ✅ Checklist de Producción

Antes de ir a producción:

- [ ] Todas las variables de entorno configuradas
- [ ] Firebase en modo producción
- [ ] Stripe con claves de producción (`pk_live_...`, `sk_live_...`)
- [ ] Google Analytics configurado
- [ ] SSL/HTTPS habilitado
- [ ] Dominio personalizado configurado
- [ ] Reglas de seguridad de Firebase revisadas
- [ ] Webhooks de Stripe configurados
- [ ] Backups configurados
- [ ] Monitoreo de errores (Sentry)
- [ ] SEO optimizado
- [ ] Tests pasando
- [ ] Performance optimizado

---

¡Listo! Tu plataforma AutoDry está configurada y lista para usar. 🚀
