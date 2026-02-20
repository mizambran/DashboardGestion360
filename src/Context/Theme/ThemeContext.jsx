// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { themes } from '../../Helpers/themeConfig';

// 1. Creamos el contexto
export const ThemeContext = createContext();

// 2. Creamos el Provider
export const ThemeProvider = ({ children }) => {
  // Inicializamos con el tema 'cyberTech' (Opción 1)
  const [currentTheme, setCurrentTheme] = useState(themes.acidNeon);

  // Opcional: Una función por si querés poner un botón de "Cambiar a modo claro" a futuro
  const toggleTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
    }
  };

  // 3. Devolvemos el Provider con los valores que queremos compartir
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {/* Esto asegura que el fondo del body cambie globalmente */}
      <div style={{ backgroundColor: currentTheme.background, minHeight: '100vh', color: currentTheme.primaryText }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};