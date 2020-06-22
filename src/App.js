import React from 'react';
import './App.css';
import Header from "./components/Header/header.component";
import Benefits from "./components/Benefits/benefits.components";
import Main  from "./components/Main/main.component";

function App() {
  return (
    <div className="App">
        <Header/>  
        <Benefits />
        <Main/>    
    </div>
  );
}

export default App;
