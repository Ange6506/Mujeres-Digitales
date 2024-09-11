// src/pages/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [character, setCharacter] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch character data
        const characterResponse = await fetch('https://api.sampleapis.com/simpsons/characters');
        if (!characterResponse.ok) {
          throw new Error(`HTTP error! Status: ${characterResponse.status}`);
        }
        const characterData = await characterResponse.json();
        const bart = characterData.find(character => character.name === 'Bart Simpson');
        setCharacter(bart);

        // Fetch episode data
        const episodeResponse = await fetch('https://api.sampleapis.com/simpsons/episodes');
        if (!episodeResponse.ok) {
          throw new Error(`HTTP error! Status: ${episodeResponse.status}`);
        }
        const episodeData = await episodeResponse.json();
        const thanksgivingEpisode = episodeData.find(ep => ep.name === 'Bart vs. Thanksgiving');
        setEpisode(thanksgivingEpisode);
      } catch (err) {
        console.error('Fetch error:', err.message);
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-lg text-yellow-600">Cargando...</p>;
  if (error) return <p className="text-lg text-red-600">Error: {error}</p>;

  return (
    <main className="flex flex-col min-h-screen bg-yellow-100 text-black">
      <div className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-800">Bienvenido a la Página de Los Simpsons</h2>
        <div className="flex flex-col items-center space-y-4">
          {character && (
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{character.name}</h3>
              <p className="mt-2">{character.normalized_name || 'Información no disponible'}</p>
            </div>
          )}
          {episode && (
            <div className="text-center">
              <h3 className="text-xl font-semibold mt-4">Episodio Destacado</h3>
              <img 
                src={episode.thumbnailUrl || 'https://via.placeholder.com/300x400?text=No+Image'} 
                alt={episode.name} 
                className="w-48 h-48 object-cover rounded border-4 border-yellow-500 mt-4"
              />
              <p className="mt-2">{episode.name || 'Título no disponible'}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
