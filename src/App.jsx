import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Herro from './Components/Herro/Herro';
// import Footer from './Components/Footer';
import About from "./Components/About/about.jsx";
import "./App.css"
import Latest from "./Components/Latest/Latest.jsx";
import Create from "./Components/Create/Create.jsx";
function App(props) {
    return (
    <>
    <Navbar/>
    <Herro/>
<About/>
        <Latest/>
        <Create/>
    {/*<Footer/>*/}
    </>
    );
}

export default App;