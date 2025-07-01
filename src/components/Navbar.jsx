import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{display: 'flex', alignItems: 'center', padding: '1rem'
        }}>
            <div style={{fontWeight: 'bold'}}>MyLogo</div>
            <ul style={{display: 'flex', gap: '1.5rem', // Increased gap for better spacing
                listStyle: 'none', // Remove bullet points
                margin: 0, padding: 0,
                marginLeft: '2rem' // Space between logo and links
            }}>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./projects">Projects</Link></li>
                <li><Link to="./videos">Videos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;