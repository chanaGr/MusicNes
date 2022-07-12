import "./App.css";
import NavBar from "./Components/navbar";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import About from "./Components/About";
import Manager from "./Components/Manager";
import View from "./Components/View";
import HomePage from "./Components/HomePage";


function App() {
  return (
   
    <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} ></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/View" element={<View/>} ></Route>
        <Route path="/Manager" element={<Manager/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
