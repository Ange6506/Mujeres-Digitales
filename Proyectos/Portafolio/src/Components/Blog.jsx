// src/components/Blog.js
import React from 'react';

const Blog = () => (
  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-Purple dark:text-Purple">Blog</h2>
    <p className="mt-4 text-gray-700 dark:text-gray-300">
      Bienvenidos a mi blog, un espacio donde comparto mis ideas, reflexiones y novedades sobre el mundo del desarrollo de software y el diseño.
      Aquí encontrarás una colección de artículos que abarcan mis aprendizajes, experiencias y pensamientos sobre diferentes temas que me apasionan.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-Purple dark:text-Purple">Temas que Me Apasionan</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      En mis artículos, abordo temas como:
    </p>
    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
      <li>Desarrollo Front-end con React y JavaScript.</li>
      <li>Diseño y estilización con Tailwind CSS.</li>
      <li>Tendencias en tecnología y su impacto en la sociedad.</li>
      <li>Experiencias y aprendizajes en proyectos colaborativos.</li>
    </ul>
    
    <h3 className="mt-6 text-xl font-semibold text-Purple dark:text-Purple">Conéctate Conmigo</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      Me encantaría escuchar tus pensamientos y comentarios sobre mis publicaciones. No dudes en contactarme a través de mis redes sociales o dejar un comentario en mis artículos.
    </p>
  </div>
);

export default Blog;
