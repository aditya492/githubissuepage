import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import Header from './Header'
import Navbar from './Navbar'
import MasterData from './MasterData'

// const Header = React.lazy(() => import("./Header"));
// const Navbar = React.lazy(() => import("./Navbar"));
// const MasterData = React.lazy(() => import("./MasterData"));


function App() {
  
  return (
    <div className="App">
      <div className='headerComponents'>
      <Header/>
      <Navbar/>
      </div>
      <MasterData/>
      
    </div>
  );
}

export default App;
