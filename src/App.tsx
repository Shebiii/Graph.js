import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from "./Pages/Bar";
function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Bar" element={ <Bar/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
