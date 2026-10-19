
import {Link} from "react-router-dom";

const Logo = ({logoImg}) => {
    return (
        <Link to='/'>
            <img  src={logoImg} alt='logo' />
        </Link>
    );
};

export default Logo;