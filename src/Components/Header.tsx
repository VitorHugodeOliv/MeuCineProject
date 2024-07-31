import { Link, Outlet } from "react-router-dom";
import Navigate from "../Components/Navigate";
import SeachBar from "../Components/SeachBar";
import logo from '../Images/logo.png';
import './Header.css';


function Header() {

return (
    <div>
        <header>
            <Link to="/">
            <img src={logo} className="logo" alt="MeuCine"/>
            </Link>
            <SeachBar />
            <Navigate />
        </header>
        <Outlet />
    </div>
);
}

export default Header;