import './style.css'
import {Link} from "react-router-dom";
import arrowIcon from '../../../assets/img/icon/arrow-right.svg';
const ButtonFill = ({type, text, onClick, path, arrow=false}) => {
    return type === 'link' ? (
        <Link className='btn-fill' to={path}>
            {text}
            {
                arrow &&
                <img src={arrowIcon} alt="arrow"/>
            }

        </Link>
    ) : (
        <button onClick={onClick} className = 'btn-fill'>
            {text}
        </button>
    )
};

export default ButtonFill;