import React from 'react';
import '../styles/navigationItem.css';


export const NavigationItem = ({ text, infoid, onclick, variant = 'primary' }) => {
  return (
    <button 
      className={`navItem ${variant}`}
      tabIndex={0}
      role="button"
      data-infoid={infoid}
      onClick={onclick}
    >
      {text}
    </button>
  );
};