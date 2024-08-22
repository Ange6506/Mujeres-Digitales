import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState('');
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState('');
  const [municipioInfo, setMunicipioInfo] = useState(null);

  useEffect(() => {
    const fetchMunicipioInfo = async () => {
      if (municipioSeleccionado) {
        try {
          const response = await fetch(`https://api-colombia.com/api/v1/City/${municipioSeleccionado}`);
          const data = await response.json();
          setMunicipioInfo(data);
        } catch (error) {
          console.error('Error al obtener la información del municipio:', error);
        }
      }
    };

    fetchMunicipioInfo();
  }, [municipioSeleccionado]);

  return (
    <div className="container">
      <SelectList
        title="Estado"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setEstadoSeleccionado(event.target.value);
          setMunicipioSeleccionado(''); 
          setMunicipioInfo(null); 
        }}
      />
      <SelectList
        title="Municipios"
        url={estadoSeleccionado ? `https://api-colombia.com/api/v1/Department/${estadoSeleccionado}/cities` : ''}
        manejadorCambio={(event) => {
          setMunicipioSeleccionado(event.target.value);
        }}
      />
      
      {municipioInfo && (
        <div className="municipio-card">
          <h3>Información del Municipio</h3>
          <p><strong>id:</strong> {municipioInfo.id}</p>
          <p><strong>Nombre:</strong> {municipioInfo.name}</p>
          <p><strong>Descripción:</strong> {municipioInfo.description}</p>
        </div>
      )}
    </div>
  );
};
