// src/components/PortfolioButton.js
import React from 'react';
import 'boxicons';

const PortfolioButton = () => (
  <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-Purple rounded-lg shrink-0 sm:w-auto hover:bg-Purple dark:hover:bg-Purple dark:bg-Purple">
    <span>Portafolio</span>
    <box-icon name='notepad' type='logo' color='#ffffff'></box-icon>
  </button>
);

export default PortfolioButton;
