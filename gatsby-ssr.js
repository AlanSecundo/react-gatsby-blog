import React from 'react';
import { lightTheme, darkTheme } from "./src/styles/theme"

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      const root = document.documentElement;
      const actualTheme = window.localStorage.getItem("theme");
      root.style.setProperty(
        '--color-text', actualTheme === 'dark' ? "${darkTheme.text}" : "${lightTheme.text}"
      );
      alert(root.style.getPropertyValue('--color-text'));
      root.style.setProperty(
        '--color-body', actualTheme === 'dark' ? "${darkTheme.body}" : "${lightTheme.body}"
      );
      root.style.setProperty(
        '--color-bg-header', actualTheme === 'dark' ? "${darkTheme.backgroundHeader}" : "${lightTheme.backgroundHeader}"
      );
    })()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};