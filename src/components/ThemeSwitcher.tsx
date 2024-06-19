import React, { useEffect, useState } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-[#554b25] text-gray-800 dark:text-gray-300 rounded"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;