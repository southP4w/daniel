import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>,
)