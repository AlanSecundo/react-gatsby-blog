import React from 'react';

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      alert(window.localStorage.getItem("theme"));
    })()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
