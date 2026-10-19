import {MENU} from "../../config/navigation/menu.config.js";
import MenuItemIcon from "../../shared/ui/menuItemIcon/menuItemIcon.jsx";
import './style.css'

const HeaderMenuIcon = () => {
    return (
        <div className='header-menu-icon'>
            {MENU.iconMenu.map((item ) => (
                <MenuItemIcon key={item.id} path={item.path} label={item.label} id={item.id} type={item.type} />
            ))}

        </div>
    );
};

export default HeaderMenuIcon;