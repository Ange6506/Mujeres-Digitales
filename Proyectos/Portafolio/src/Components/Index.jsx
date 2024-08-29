import React from "react";
import git from "../assets/img/Gitt.png";
import 'boxicons'

export const Index = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
         
          <h1 className="mt-3 text-4xl text-white dark:text-white md:text-3xl¿">
           Portafolio
          </h1>
          <div className="flex items-center mt-6 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">

              <span>GitHub</span>
              <box-icon name='github' type='logo' color='#ffffff' ></box-icon>                         
              </button>

            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-Purple rounded-lg shrink-0 sm:w-auto hover:bg-Purple dark:hover:bg-Purple dark:bg-Purple">
            <span>Portafolio</span>
             <box-icon name='notepad'type='logo' color='#ffffff'></box-icon>
            </button>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <a href="#" className="inline-flex items-center text-sm text-Purple gap-x-2 dark:text-Purple hover:underline">
                <span>Documentacion</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> sección de documentación técnica.</p>
            </div>

            <div>
              <a href="#" className="inline-flex items-center text-sm text-Purple gap-x-2 dark:text-Purple hover:underline">
                <span>Sobre Mi</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> sección de información sobre mi.</p>
            </div>

            <div>
              <a href="#" className="inline-flex items-center text-sm text-Purple gap-x-2 dark:text-Purple hover:underline">
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
          <img
            src={git}
          />
        </div>
      </div>
    </section>
  );
};
