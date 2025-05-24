// src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    // Aqui usamos a div que aplica os temas
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Olá, Maria Clara!</h1>
      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded hover:opacity-80 transition"
      >
        {darkMode ? 'Tema Claro' : 'Tema Escuro'}
      </button>
    </div>
  );
}

export default App;
