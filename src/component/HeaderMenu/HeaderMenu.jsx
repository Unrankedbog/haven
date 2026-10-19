import  {MENU} from "../../config/navigation/menu.config.js";
import MenuItem from "../../shared/ui/MenuItem/MenuItem.jsx"
import './style.css'

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            {MENU.mainMenu.map((item) => (
                <MenuItem key={item.id} path={item.path} label={item.label} />
            ))}
        </div>
    );
};

export default HeaderMenu;