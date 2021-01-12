import React from 'react';
import { lightTheme, darkTheme } from "./src/styles/theme"

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      const root = document.documentElement;
      const theme = window.localStorage.getItem("theme")
      root.style.setProperty(
        '--color-text', theme === 'dark' ? ${darkTheme.text} : ${lightTheme.text}
      );
      root.style.setProperty(
        '--color-body', theme === 'dark' ? ${darkTheme.body} : ${lightTheme.body}
      );
      root.style.setProperty(
        '--color-backgroundHeader, theme === 'dark' ? ${darkTheme.backgroundHeader} : ${lightTheme.backgroundHeader}
      );
      
      alert(root.style.getPropertyValue('--color-text'));
      alert(root.style.getPropertyValue('--color-body'));
      alert(root.style.getPropertyValue('--color-backgroundHeader'));
    })()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
