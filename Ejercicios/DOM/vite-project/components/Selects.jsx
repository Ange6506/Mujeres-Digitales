import { SelectList } from "./SelectList";

export const Selects = () => {
  return (
    <div className="container">
      <SelectList title="Estados" />
      <SelectList title="Municipios" />
      <SelectList title="Ciudades" />
    </div>
  );
};
