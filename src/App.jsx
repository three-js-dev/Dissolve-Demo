import DissolveDemo from "./components/DissolveDemo";
import Documentation from "./components/Documentation";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="documentation-container">
        <Documentation />
      </div>
      <div className="demo-container">
        <DissolveDemo />
      </div>
    </div>
  );
}

export default App;
