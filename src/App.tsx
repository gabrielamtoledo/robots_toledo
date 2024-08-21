import React from "react";
import "./App.css";
import Card from "./components/card";
import Navbar from "./components/NavBar";



const App = () => {

    return (
      <div className="App">
        <Card title="Curso Front end"/>
        <Card title="Curso Fullstack"/>
        <Navbar aba="Produtos"/>
      </div>
    );
};

export default App;

