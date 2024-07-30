import { Link } from "react-router-dom";

const Nav = () => {
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorite">Favoritos</Link>   
        </nav>
    )
}

export default Nav;