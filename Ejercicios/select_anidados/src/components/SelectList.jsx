import { useFetch } from "../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();
  const { data, error, loading } = useFetch(url);

  if (loading) {
    // Puntos animados de carga
    return (
      <div className="flex justify-center items-center space-x-2">
        <p className="text-teal-600">Cargando {title}</p>
        <div className="flex space-x-1">
          <span className="dot bg-teal-500 h-2.5 w-2.5 rounded-full animate-bounce"></span>
          <span className="dot bg-teal-500 h-2.5 w-2.5 rounded-full animate-bounce200"></span>
          <span className="dot bg-teal-500 h-2.5 w-2.5 rounded-full animate-bounce400"></span>
        </div>
      </div>
    );
  }

  if (!data) return null;
  if (error) return <p className="text-red-600">Ha ocurrido un error: {error}</p>;

  let options = data;

  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold text-teal-700" htmlFor={key}>
        {label}
      </label>
      <select
        name={key}
        id={key}
        onChange={manejadorCambio}
        className="block w-full p-3 bg-gray-50 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
      >
        <option value="">Seleccione un {title}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
