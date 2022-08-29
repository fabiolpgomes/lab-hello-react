import logo from "../../images/ironhack-logo-xs.png";
import menu from "../../images/menu-top-xs.png";

function Navbar () {

    return (
        <>
        <div className="navBar">
        <img src={logo} alt="Logo Ironhack" />
        <img src={menu} alt="Menu logo"/>
        </div>
        </>
    )
}

export default Navbar;