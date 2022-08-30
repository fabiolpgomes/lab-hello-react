import Logo from "../../images/ironhack-logo-xs.png";
import Menu from "../../images/menu-top-xs.png";



// Componente do cabeçalho (menu superior)
function Header() {
  console.log();
    return (
      <header className="header">
        <img src={Logo} alt="Ironhack logo" />
        <img src={Menu} alt="Menu Icon" />
      </header>
    );
  }
  
  export default Header;