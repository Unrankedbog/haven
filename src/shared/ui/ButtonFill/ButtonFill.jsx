import './style.css'
import {Link} from "react-router-dom";

const ButtonFill = ({type, text, onClick, path}) => {
    return type === 'link' ? (
        <Link className='btn-fill' to={path}>
            {text}
        </Link>
    ) : (
        <button onClick={onClick} className = 'btn-fill'>
            {text}
        </button>
    )
};

export default ButtonFill;