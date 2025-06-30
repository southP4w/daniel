import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import Videos from "./pages/Videos.jsx";

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