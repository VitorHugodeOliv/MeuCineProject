import { Link } from "react-router-dom";
import './Navigate.css';
import { useState } from "react";

const Nav = () => {
    const [menu, setMenu] = useState(false);
    
    const toggleMenu = () => {
        setMenu(!menu);
    }
    
    return (
        <>
            <div className={`off-screen ${menu ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorite">Favoritos</Link>
                    </li>
                </ul>
            </div>
            <nav>
                <div className={`ham-menu ${menu ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}

export default Nav;