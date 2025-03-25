import React, { useState, useEffect } from 'react';
import '../CSS/darkmode.scss';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const currentTheme = storedTheme ? storedTheme : prefersDark ? 'dark' : 'light';
      setIsDark(currentTheme === 'dark');
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="dark-mode-toggle">
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;