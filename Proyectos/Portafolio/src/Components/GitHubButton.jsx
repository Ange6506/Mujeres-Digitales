// src/components/GitHubButton.jsx
import React from 'react';
import 'boxicons';

const GitHubButton = () => {
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/Ange6506/Mujeres-Digitales.git";
  };

  return (
    <button
      onClick={handleGitHubClick}
      className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
    >
      <span>GitHub</span>
      <box-icon name='github' type='logo' color='#ffffff'></box-icon>
    </button>
  );
};

export default GitHubButton;
