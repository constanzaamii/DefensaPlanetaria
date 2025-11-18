# 🌌 Defensa Planetaria - Observación de Exoplanetas

Proyecto educativo de exploración de exoplanetas desarrollado con React, Vite, Bootstrap 5 y Node.js.

## 📋 Descripción

Sistema web simple para explorar, comparar y aprender sobre exoplanetas descubiertos fuera de nuestro sistema solar. Incluye visualización 3D, sistema de favoritos, comparador de planetas y sección educativa.

## 🛠️ Stack Tecnológico

### Frontend
- **React** - Biblioteca de interfaz de usuario
- **Vite** - Build tool y dev server
- **Bootstrap 5** - Framework CSS
- **React Router** - Navegación
- **Three.js** - Visualización 3D
- **Chart.js** - Gráficos (preparado para uso)
- **Axios** - Cliente HTTP

### Backend
- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **CORS** - Middleware para peticiones cross-origin

## 📁 Estructura del Proyecto

```
DefensaPlanetaria/
├── client/                    # Frontend React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       # Header, Footer, Layout
│   │   │   ├── exoplanet/    # Card, Grid, Viewer3D
│   │   │   └── filters/      # SearchBar, FilterSidebar
│   │   ├── pages/            # Home, Catalog, Detail, Favorites, Compare, Learn
│   │   ├── hooks/            # useExoplanets, useFavorites
│   │   └── services/         # api.js
│   └── package.json
│
└── server/                    # Backend Node.js + Express
    ├── data/
    │   ├── exoplanets.json   # Base de datos de planetas
    │   └── favorites.json    # Favoritos del usuario
    ├── routes/
    │   ├── exoplanets.js     # Endpoints de planetas
    │   └── favorites.js      # Endpoints de favoritos
    ├── index.js              # Servidor principal
    └── package.json
```

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/constanzaamii/DefensaPlanetaria.git
cd DefensaPlanetaria
```

### 2. Instalar dependencias del Backend

```bash
cd server
npm install
```

### 3. Instalar dependencias del Frontend

```bash
cd ../client
npm install
```

## ▶️ Ejecutar el Proyecto

### Backend (puerto 3001)

```bash
cd server
npm start
# O con nodemon para desarrollo:
npm run dev
```

### Frontend (puerto 5173)

En otra terminal:

```bash
cd client
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

## 📚 Funcionalidades

### 🏠 Página Principal
- Hero section con llamado a la acción
- Estadísticas generales del catálogo
- Tarjetas informativas de las funcionalidades

### 🔍 Catálogo
- Grid de tarjetas de exoplanetas
- Búsqueda por nombre o estrella
- Filtros por tipo de planeta y zona habitable
- Vista detallada de cada planeta

### 🌍 Detalle de Planeta
- Información completa del exoplaneta
- Visualización 3D interactiva con Three.js
- Datos científicos (masa, radio, distancia, temperatura)
- Sistema de favoritos

### ⭐ Favoritos
- Lista de planetas guardados como favoritos
- Agregar/eliminar favoritos fácilmente

### 📊 Comparador
- Seleccionar hasta 3 planetas
- Tabla comparativa de características
- Análisis lado a lado

### 📖 Sección Educativa
- Métodos de detección explicados
- Tipos de exoplanetas
- Información sobre la zona habitable
- Glosario de términos

## 🎨 Características del Diseño

- **Tema oscuro** completo
- **Responsive** - Se adapta a móviles, tablets y desktop
- **Bootstrap 5** para componentes UI
- **Iconos emoji** para visual rápido
- **Navegación intuitiva** con React Router

## 🔌 API Endpoints

### Exoplanetas

```
GET /api/exoplanets              # Obtener todos los planetas
GET /api/exoplanets?type=...     # Filtrar por tipo
GET /api/exoplanets?habitable=true  # Solo habitables
GET /api/exoplanets/:id          # Obtener un planeta específico
GET /api/exoplanets/search/:query   # Buscar planetas
```

### Favoritos

```
GET /api/favorites               # Obtener favoritos
POST /api/favorites              # Agregar favorito
DELETE /api/favorites/:id        # Eliminar favorito
```

## 📦 Datos Incluidos

El catálogo incluye 12 exoplanetas reales:
- Kepler-186f
- Proxima Centauri b
- TRAPPIST-1e
- Kepler-452b
- HD 209458 b
- 51 Pegasi b
- Kepler-16b
- Gliese 581g
- WASP-12b
- Kepler-22b
- HD 189733 b
- Kepler-442b

Cada planeta incluye:
- Nombre y estrella anfitriona
- Tipo de planeta
- Masa y radio (en relación a la Tierra)
- Distancia en años luz
- Temperatura
- Estado de zona habitable
- Año y método de descubrimiento
- Descripción informativa

## 🤝 Contribuir

Este es un proyecto educativo. Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

- El proyecto está diseñado para ser simple y fácil de entender
- Ideal para estudiantes de 2º año aprendiendo desarrollo web
- Código comentado donde es necesario
- Mantiene la estructura clara y organizada
- Las imágenes de planetas usan Unsplash como placeholder

## 📄 Licencia

Proyecto educativo - Libre para uso académico

## 👥 Autores

Proyecto de Defensa Planetaria - 2024

---

**¿Necesitas ayuda?** Revisa la sección "Aprender" dentro de la aplicación para información sobre exoplanetas.
