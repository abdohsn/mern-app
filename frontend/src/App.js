import "./App.css";
import Weather from "./components/Weather";
import Mynav from "./components/Mynav";
import Mytable from "./components/Mytable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mynav />
        <Weather />
        <Mytable />
      </header>
    </div>
  );
}

export default App;
