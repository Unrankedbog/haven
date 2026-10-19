import HeaderMenu from "../HeaderMenu/HeaderMenu.jsx";
import HeaderMenuIcon from "../HeaderMenuIcon/HeaderMenuIcon.jsx";
import Logo from "../../shared/ui/Logo/Logo.jsx";
import logoImg from "../../assets/img/icon/logo.svg"
import './style.css'
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";


const Header = () => {
    return (
        <>
        <div className="header-line"></div>
        <header className="header">
            <div className="container">
                <Logo logoImg={logoImg} />
                <HeaderMenu />
                <div className="header-right">
                    <HeaderMenuIcon />
                    <BurgerMenu />
                </div>


            </div>
        </header>

        </>
    );
};

export default Header;