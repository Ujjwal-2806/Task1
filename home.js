import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Theme
    </button>
  );
};

const SocialMedia = () => {
  return (
    <div>
      <h3>Connect with us:</h3>
      <ul>
        <li><a href="https://gmail.com/example" target="_blank" rel="noopener noreferrer">Gmail</a></li>
        <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
      <p>Copyright @2024 all right reserved(center)</p>
    </div>
  );
};


const Content = () => {
  const { theme } = useTheme();
  const themeStyles = {
    backgroundColor: theme === 'light' ? '#FFFFFF' : '#333333',
    color: theme === 'light' ? '#000000' : '#FFFFFF',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={themeStyles}>
      <ThemeToggler />
      <SocialMedia />
    </div>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const home = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default home;
