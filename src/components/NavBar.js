import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <div className="navbar">
            <Link to="/"><div>Home</div></Link>
            <Link to="/bandnew"><div>New Band</div></Link>
        </div>
    )
}