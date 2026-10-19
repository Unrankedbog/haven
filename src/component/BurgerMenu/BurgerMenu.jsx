import './style.css'
import {useState} from "react";
import {MENU} from "../../config/navigation/menu.config.js";
import MenuItem from "../../shared/ui/MenuItem/MenuItem.jsx";
import MenuItemIcon from "../../shared/ui/menuItemIcon/menuItemIcon.jsx";

const BurgerMenu = () => {


    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <>
            <button className={`burger-button ${open ? "active": ""}`} onClick={toggleMenu}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>

            <div className={`burger-menu ${open ? "open": ""}`}>
                <div className="burger-menu-content">
                    <nav className="burger-main-menu">
                        {MENU.mainMenu.map((item) => (
                            <MenuItem key={item.id} path={item.path} label={item.label} onClick={closeMenu} />
                        ))}
                    </nav>
                    <div className="burger-icon-menu">
                        {MENU.iconMenu.map((item ) => (
                            <MenuItemIcon key={item.id} path={item.path} label={item.label} id={item.id} type={item.type} onClick={closeMenu} />
                        ))}
                    </div>
                </div>
            </div>
            {open &&  <div className='burger-overlay' onClick={closeMenu}></div>}

        </>


    );
};

export default BurgerMenu;