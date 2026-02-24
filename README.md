# 🎮 Free Games Explorer

## 📌 Objetivos

El objetivo de este proyecto es desarrollar una **Aplicación de Página Única (SPA)** utilizando **React, TypeScript y React Router**, capaz de consumir datos desde una API externa mediante peticiones AJAX.

La aplicación permite explorar videojuegos gratuitos, filtrarlos por categoría y plataforma, consultar detalles individuales y visualizar información sobre desarrolladores.

Este proyecto demuestra conocimientos en:

- Arquitectura modular en React
- Uso avanzado de React Router (loaders, rutas dinámicas y manejo de errores)
- Integración con API externa
- Manejo de estado y filtrado de datos
- Organización de componentes siguiendo Atomic Design

# 🚀 Características

✅ Listado completo de videojuegos  
✅ Búsqueda por nombre  
✅ Filtro por categoría  
✅ Filtro por plataforma  
✅ Ruta dinámica para detalle del juego (`/game/:id`)  
✅ Ruta dinámica para desarrollador (`/developer/:developerName`)  
✅ Manejo de errores con página personalizada  
✅ Loader de datos con React Router  
✅ Diseño responsive  
✅ Arquitectura basada en Atomic Design  

# 🧩 Organización de Componentes

## 🔹 Componentes Atómicos
- InputSearch
- GameCard
- Botones y elementos básicos

## 🔹 Componentes Moleculares
- GameList (conjunto de GameCard)

## 🔹 Componentes Organismo
- Navbar (categorías + plataformas)

## 🔹 Componentes de Página
- Home
- GameDetail
- Developer
- ErrorPage

# 🌐 Rutas Implementadas

| Ruta | Descripción |
|------|------------|
| `/` | Página principal con listado y filtros |
| `/game/:id` | Detalle del videojuego |
| `/developer/:developerName` | Juegos del desarrollador |
| Error automático | Página personalizada para errores 404 y 500 |

# 🔌 Integración de API

La aplicación consume datos mediante el servicio:
services/gameService.ts

## Endpoints utilizados:

- Obtener todos los juegos
- Obtener juego por ID
- Filtrado por desarrollador (lógica local)
- Filtrado por categoría y plataforma (mediante query params)

Se utilizan **loaders de React Router** para cargar datos antes de renderizar cada página.

---

# ⚠️ Manejo de Errores

Se implementó una página de error personalizada (`ErrorPage.tsx`) que:

- Muestra código de error (404 / 500)
- Muestra mensaje personalizado
- Permite volver al inicio



