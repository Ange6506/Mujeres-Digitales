// src/components/ContentSection.js
import React from 'react';
import Documentation from './Documentation';
import AboutMe from './AboutMe';
import Blog from './Blog';
import git from '../assets/img/Gitt.png';

const ContentSection = ({ currentSection }) => {
  switch (currentSection) {
    case 'documentation':
      return <Documentation />;
    case 'aboutMe':
      return <AboutMe />;
    case 'blog':
      return <Blog />;
    case 'home':
    default:
      return <img src={git} alt="Default" className="w-full h-auto" />;
  }
};

export default ContentSection;
