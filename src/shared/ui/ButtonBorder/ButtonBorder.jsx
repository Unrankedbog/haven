import './style.css'

import {Link} from "react-router-dom";

const ButtonBorder = ({type, text, onClick, path}) => {
    return type === 'link' ? (
        <Link className='btn-border' to={path}>
            {text}
        </Link>
    ) : (
        <button onClick={onClick} className = 'btn-border'>
            {text}
        </button>
    )
};

export default ButtonBorder;