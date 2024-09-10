import { Selects } from "./components/Selects";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 via-blue-500 to-green-500 text-white p-4">
      <div className="w-full max-w-lg bg-gray-50 text-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Aprendizaje React</h1>
        <p className="text-lg text-center mb-6 text-gray-600">Selects Anidados</p>
        <hr className="border-t-2 border-blue-400 mb-6" />
        <Selects />
      </div>
    </div>
  );
};

export default App;
