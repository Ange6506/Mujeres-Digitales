// src/pages/Characters.js
import React, { useEffect, useState } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/simpsons/episodes');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading episodes...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

  return (
    <main className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Episodios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((episode) => (
          <div key={episode.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={episode.thumbnailUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={episode.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{episode.name}</h3>
              <p className="text-gray-700 mb-2">Season {episode.season} - Episode {episode.episodeNumber}</p>
              <p className="text-gray-600">{episode.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Characters;
