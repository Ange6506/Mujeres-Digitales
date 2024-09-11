// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí debes ajustar el endpoint según la API real
    try {
      // Simulación de envío exitoso
      setStatus('Mensaje enviado exitosamente');
    } catch (err) {
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-yellow-50 text-black">
      <div className="w-full max-w-md bg-yellow-100 p-6 rounded-lg shadow-lg border-2 border-yellow-500">
        <h2 className="text-3xl font-bold mb-4 text-yellow-800 text-center">Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-lg font-medium">
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full mt-1 p-2 border border-yellow-300 rounded"
              required
            />
          </label>
          <label className="block text-lg font-medium">
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full mt-1 p-2 border border-yellow-300 rounded"
              required
            />
          </label>
          <label className="block text-lg font-medium">
            Mensaje:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full mt-1 p-2 border border-yellow-300 rounded"
              rows="4"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 w-full"
          >
            Enviar
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-800">{status}</p>}
      </div>
    </main>
  );
};

export default Contact;
