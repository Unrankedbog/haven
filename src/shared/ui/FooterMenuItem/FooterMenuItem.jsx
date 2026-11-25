import {Link} from "react-router-dom";
import './style.css'

const FooterMenuItem = ({itemMenu}) => {
    return (
        <ul>
            {itemMenu.map((item) => (
                <li key={item.id} >
                    <Link to= {item.path}>
                        {item.label}
                    </Link>
                </li>
            ))}

        </ul>
    );
};

export default FooterMenuItem;