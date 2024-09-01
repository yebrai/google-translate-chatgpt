# Google Translate ChatGPT

Este proyecto es una aplicación web desarrollada con **React** y **TypeScript**, utilizando **Vite** como herramienta de desarrollo y construcción. La aplicación integra la API de ChatGPT para proporcionar traducciones de texto utilizando servicios externos.

El fin de este, fue conocer como funcionaba la API de Chat-gpt cuando esta fue lanzada.

## Características

- **Traducción automática**: Utiliza la API de ChatGPT para traducir texto en varios idiomas.
- **Soporte para múltiples idiomas**: Se ha añadido soporte para varios idiomas con la integración de MyMemory API.
- **Interfaz de usuario responsiva**: Estilos mejorados y consistentes gracias a **Bootstrap**.
- **Arquitectura modular**: Uso de hooks, componentes reutilizables y servicios para una arquitectura escalable y mantenible.

## Estructura del Proyecto

- **public/**: Archivos estáticos y públicos.
- **src/**: Código fuente del proyecto.
  - **assets/**: Recursos como imágenes y archivos estáticos.
  - **components/**: Componentes de la interfaz de usuario.
  - **hooks/**: Hooks personalizados utilizados en la aplicación.
  - **services/**: Lógica de negocio y servicios de API.
  - **App.tsx**: Componente principal de la aplicación.
  - **index.html**: Punto de entrada HTML de la aplicación.
  - **constants.ts**: Definición de constantes utilizadas en la aplicación.
  - **index.css**: Estilos globales.
  - **types.d.ts**: Definiciones de tipos TypeScript.
  - **App.test.tsx**: Pruebas unitarias de la aplicación usando Testing Library y Vitest.
  
- **.eslintrc.cjs**: Configuración de ESLint para mantener la calidad del código.
- **tsconfig.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración de Vite para el proyecto.

## Requisitos Previos

- Node.js instalado en tu máquina.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yebrai/google-translate-chatgpt.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
