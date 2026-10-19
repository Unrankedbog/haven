
import {Link} from "react-router-dom";

const MenuItem = ({path, label, onClick}) => {
    return (
        <Link to={path} className='menu-item' onClick={onClick}>
            {label}
        </Link>
    );
};

export default MenuItem;