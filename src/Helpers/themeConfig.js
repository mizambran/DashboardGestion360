// src/context/themeConfig.js

export const themes = {
  cyberTech: { // Esta es la Opción 1 que elegiste
    name: 'cyberTech',
    background: '#0f172a',
    cardBackground: '#1e293b',
    headerBackground: '#020617',
    primaryText: '#f8fafc',
    secondaryText: '#94a3b8',
    accentGreen: '#10b981', // El verde neón
    accentBlue: '#06b6d4',  // El cian
    border: '#334155',
    inputBackground: '#c7cacf' // Ojo, este gris para el input puede ser muy claro para el tema oscuro, pero respeto lo que pusiste
  },
  lightModern: { // La Opción 2 por si querés probar cambiar después
    name: 'lightModern',
    background: '#f8fafc',
    cardBackground: '#ffffff',
    headerBackground: '#ffffff',
    primaryText: '#0f172a',
    secondaryText: '#475569',
    accentGreen: '#f97316', // Acá usamos naranja en lugar de verde
    accentBlue: '#3b82f6',
    border: '#e2e8f0',
    inputBackground: '#f1f5f9'
  },
  // 1. Basado en tu Foto 1 (Azul oscuro con acentos Amarillo/Lima y Cian)
  acidNeon: {
    name: 'acidNeon',
    background: '#0a0f25',
    cardBackground: '#111832',
    headerBackground: '#050814',
    primaryText: '#ffffff',
    secondaryText: '#8fa0c9',
    accentGreen: '#d2ff00', // Amarillo/Lima ácido
    accentBlue: '#00e5ff',  // Cian brillante
    border: '#1f2a4f',
    inputBackground: '#1a2244'
  },

  // 2. Basado en tu Foto 2 - "Vapor" de Bootswatch (Cyberpunk)
  vaporwave: {
    name: 'vaporwave',
    background: '#1a0b2e',
    cardBackground: '#2d1b4e',
    headerBackground: '#110720',
    primaryText: '#e0d8f0',
    secondaryText: '#a390c4',
    accentGreen: '#ff2a85', // Fucsia/Magenta vibrante
    accentBlue: '#00f2fe',  // Cian neón
    border: '#4a2b7a',
    inputBackground: '#392462'
  },

  // 3. Basado en tu Foto 3 - "Momentum" (Startup, Pizarra y Naranja)
  momentumDark: {
    name: 'momentumDark',
    background: '#2b3441',
    cardBackground: '#333e4f',
    headerBackground: '#212936',
    primaryText: '#f8f9fa',
    secondaryText: '#a0aec0',
    accentGreen: '#ff6b52', // Naranja/Coral
    accentBlue: '#38bdf8',  // Celeste suave
    border: '#475569',
    inputBackground: '#404c5e'
  },

  // 4. Dracula (Un clásico indiscutible entre los programadores)
  dracula: {
    name: 'dracula',
    background: '#282a36',
    cardBackground: '#44475a',
    headerBackground: '#21222c',
    primaryText: '#f8f8f2',
    secondaryText: '#6272a4',
    accentGreen: '#50fa7b', // Verde claro
    accentBlue: '#ff79c6',  // Rosa
    border: '#6272a4',
    inputBackground: '#383a59'
  },

  // 5. Nord (Estilo ártico, gris azulado muy elegante y relajante)
  nord: {
    name: 'nord',
    background: '#2e3440',
    cardBackground: '#3b4252',
    headerBackground: '#242933',
    primaryText: '#eceff4',
    secondaryText: '#d8dee9',
    accentGreen: '#8fbcbb', // Verde agua helado
    accentBlue: '#88c0d0',  // Celeste hielo
    border: '#4c566a',
    inputBackground: '#434c5e'
  },

  // 6. Midnight Gold (Súper premium, negro profundo con dorado) // ME GUSTA
  midnightGold: {
    name: 'midnightGold',
    background: '#121212',
    cardBackground: '#1e1e1e',
    headerBackground: '#0a0a0a',
    primaryText: '#e0e0e0',
    secondaryText: '#9e9e9e',
    accentGreen: '#ffb300', // Dorado/Ambar
    accentBlue: '#4dd0e1',  // Celeste claro
    border: '#333333',
    inputBackground: '#2c2c2c'
  },

  // 7. Synthwave (Onda Retrowave 80s)
  synthwave: {
    name: 'synthwave',
    background: '#2b213a',
    cardBackground: '#3a2e4d',
    headerBackground: '#1f162b',
    primaryText: '#f9f6ff',
    secondaryText: '#b3a6c9',
    accentGreen: '#f9ca24', // Amarillo sol
    accentBlue: '#f368e0',  // Rosa flúor
    border: '#4b3968',
    inputBackground: '#453561'
  },

  // 8. Forest Dark (Tonos verdosos oscuros, da mucha paz visual)
  forestDark: {
    name: 'forestDark',
    background: '#1c2321',
    cardBackground: '#27312e',
    headerBackground: '#131816',
    primaryText: '#e8eceb',
    secondaryText: '#9ba8a5',
    accentGreen: '#4ade80', // Verde pasto vivo
    accentBlue: '#facc15',  // Amarillo claro
    border: '#3a4a45',
    inputBackground: '#2f3b38'
  },

  // 9. Oceanic (Azules profundos y tonos marinos)
  oceanic: {
    name: 'oceanic',
    background: '#0f172a',
    cardBackground: '#1e293b',
    headerBackground: '#020617',
    primaryText: '#f1f5f9',
    secondaryText: '#94a3b8',
    accentGreen: '#2dd4bf', // Teal / Turquesa
    accentBlue: '#818cf8',  // Indigo / Violeta suave
    border: '#334155',
    inputBackground: '#273549'
  },

  // 10. Outrun (Alto contraste, oscuro casi puro con rojo y azul neón)
  outrun: {
    name: 'outrun',
    background: '#0d0d12',
    cardBackground: '#171721',
    headerBackground: '#050508',
    primaryText: '#ffffff',
    secondaryText: '#8a8a9e',
    accentGreen: '#ff2a6d', // Rojo/Rosa Neón
    accentBlue: '#05d9e8',  // Azul Tron
    border: '#2a2a3d',
    inputBackground: '#1e1e2d'
  }
};