import React from 'react';

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      function setTheme(theme) {
        window.__theme = theme;
        if (theme === 'dark') {
          document.documentElement.className = 'dark';
        } else {
          document.documentElement.className = '';
        }
      };

      window.__setPreferredTheme = function(theme) {
        setTheme(theme);
        try {
          localStorage.setItem('theme', theme);
        } catch (e) {
          console.log(e)
        }
      };

      let preferredTheme;
      try {
        preferredTheme = localStorage.getItem('theme');
      } catch (e) {
        console.log(e)
      }

      let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

      setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
    })()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};