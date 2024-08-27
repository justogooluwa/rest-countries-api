import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
// import CountryApp from "./components/CountryApp";
// import Country from "./components/Country";


const App = () => {
    return (
        <Router>
            <Header/>
          
           <Routes>
          <Route path="/" element={  <Filter/>}/>
           </Routes>
        </Router>
    );
};

export default App;