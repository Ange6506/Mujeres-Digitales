import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");

  return (
    <div className="space-y-4">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => setDepartamentos(event.target.value)}
      />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => setMunicipios(event.target.value)}
      />
    </div>
  );
};
