import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx'
import Projects from './components/pages/Projects.jsx';
import Videos from "./components/pages/Videos.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/videos"} element={<Videos/>}/>
            </Routes>
        </>
    );
}

export default App;