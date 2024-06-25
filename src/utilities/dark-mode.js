'use-strict';

const darkMode = () => {
  const darkModeButtons = document.querySelectorAll('#toggle-mode');

  const theme = localStorage.getItem('theme');

  theme && document.body.classList.add(theme);

  const handleToggleTheme = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  darkModeButtons.forEach((button) =>
    button.addEventListener('click', handleToggleTheme)
  );
};

export default darkMode;