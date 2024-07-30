import { Outlet } from "react-router-dom";
import Navigate from "../Components/Navigate";
import './Header.css';

function Header() {
return (
    <div>
        <header>
            <h1>MeuCine</h1>
            <Navigate />
        </header>
        <Outlet />
    </div>
);
}

export default Header;