import { Selects } from '../components/Selects';
import './App.css';
import './index.css'; 

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Aprendizaje React</h1>
      <p className="app-subtitle">Selects Anidados</p>
      <hr className="app-divider" />
      {/* Selects Anidados */}
      <Selects />
    </div>
  );
};

export default App;
