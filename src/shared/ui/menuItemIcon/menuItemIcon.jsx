import {Link} from "react-router-dom";



const MenuItemIcon = ({path, label, id, type, onClick}) => {
    return type === 'link' ? (
        <Link to={path} className='menu-item-icon' onClick={onClick}>
            <img src={label} alt={id} />
        </Link>
    ) : (
        <button onClick = {onClick} className='menu-item-icon' >
            <img src={label} alt={id} />
        </button>
    )
};

export default MenuItemIcon;