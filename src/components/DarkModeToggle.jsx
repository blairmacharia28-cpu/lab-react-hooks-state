import React from 'react';

const DarkModeToggle = ({ darkMode, isDarkMode, onToggle, toggleDarkMode, setDarkMode }) => {
  const isDark = darkMode ?? isDarkMode ?? false;




  const handleToggle = () => {
    if (onToggle) return onToggle();
    if (toggleDarkMode) return toggleDarkMode();
    if (setDarkMode) return setDarkMode(!isDark);
  };




  return (
   <button onClick={() => setIsDarkMode(!isDarkMode)}>
  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
</button>
  );
};

export default DarkModeToggle;


