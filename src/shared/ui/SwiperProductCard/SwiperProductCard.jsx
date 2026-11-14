import './style.css'
import {Link} from "react-router-dom";


const SwiperProductCard = ({product}) => {

    return (
        <Link to = {`/products/${product.slug}`} className="product-card">
            <div className="product-card-img-wrapper">
                <img src={`/Images/product-img/${product.images[0]}`} alt={product.name} loading="lazy" />
            </div>

            <div className="product-card-info">
                <h3 className="h3">{product.name}</h3>
                <p>{product.material}</p>

                <div className="product-card-bottom">
                    <div className="product-card-price">
                        <span className={`product-card-total-price`}>
                            {product.price}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SwiperProductCard;