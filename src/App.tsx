import logo from "./logo.svg";
import "./App.css";
import BarChart from "./components/BarChart";
import { HorizontalBar } from "./components/HorizontalBar";
function App() {

  return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Charts</h2>
    </div>
    <div className="size"><BarChart/></div>
    <div className="size"><HorizontalBar/></div>
    
    </div>
  );
}

export default App;
