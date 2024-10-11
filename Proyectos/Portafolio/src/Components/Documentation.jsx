// src/components/Documentation.js
import React from 'react';

const Documentation = () => (
  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-Purple dark:text-Purple">Documentación Técnica</h2>
    <p className="mt-4 text-gray-700 dark:text-gray-300">
      Este documento proporciona una visión general del proyecto, así como instrucciones sobre su uso y funcionalidades. 
      Se aborda tanto la arquitectura del software como las herramientas y tecnologías utilizadas en su desarrollo.
    </p>
    
    <h3 className="mt-6 text-xl font-semibold text-Purple dark:text-Purple">Información Técnica</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      Me gradué como Bachiller Técnico en Diseño Multimedia, donde adquirí habilidades en la creación y diseño de contenido visual. 
      Actualmente, estoy finalizando mis estudios como Tecnólogo en Análisis y Desarrollo de Software, lo que me ha permitido profundizar 
      en el desarrollo de aplicaciones y soluciones informáticas.
    </p>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      A lo largo de mi formación, he desarrollado competencias en:
    </p>
    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
      <li>Desarrollo web utilizando <strong>React</strong> para la creación de interfaces de usuario interactivas.</li>
      <li>Estilización y diseño responsivo mediante <strong>Tailwind CSS</strong>, lo que me permite crear diseños modernos y atractivos.</li>
      <li>Programación en <strong>JavaScript</strong>, donde he trabajado tanto en el desarrollo del front-end como en la lógica del back-end.</li>
    </ul>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      Estoy emocionado por aplicar mis conocimientos en proyectos reales y seguir aprendiendo en el campo del desarrollo de software.
    </p>
  </div>
);

export default Documentation;
