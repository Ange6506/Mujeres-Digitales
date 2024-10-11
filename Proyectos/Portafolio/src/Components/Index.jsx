// src/components/Index.js
import React, { useState } from 'react';
import GitHubButton from './GitHubButton'; // Adjust path as needed
import PortfolioButton from './PortfolioButton';
import ContentSection from './ContentSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const handleDocumentationClick = () => setCurrentSection("documentation");
  const handleAboutMeClick = () => setCurrentSection("aboutMe");
  const handleBlogClick = () => setCurrentSection("blog");

  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="mt-3 text-4xl text-white dark:text-white md:text-3xl">
            Portafolio
          </h1>
          <div className="flex items-center mt-6 gap-x-3">
            <GitHubButton />
            <PortfolioButton />
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <a 
                href="#" 
                onClick={handleDocumentationClick}
                className="inline-flex items-center text-sm text-Purple gap-x-2 dark:text-Purple hover:underline"
              >
                <span>Documentacion</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">sección de documentación técnica.</p>
            </div>

            <div>
              <a 
                href="#" 
                onClick={handleAboutMeClick}
                className="inline-flex items-center text-sm text-Purple gap-x-2 dark:text-Purple hover:underline"
              >
                <span>Sobre Mi</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">sección de información sobre mi.</p>
            </div>

            <div>
              <a 
                href="#" 
                onClick={handleBlogClick}
                className="inline-flex items-center text-sm text-Purple gap-x-2 dark:text-Purple hover:underline"
              >
                <span>Blog</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">sección de ideas, reflexiones y novedades.</p>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <ContentSection currentSection={currentSection} />
        </div>
      </div>
    </section>
  );
};

export default Index;
