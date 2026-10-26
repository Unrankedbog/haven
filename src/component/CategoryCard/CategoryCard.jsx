import "./style.css"
import categoryBedroom from '../../assets/img/category-bedroom.jpg';
import categoryKitchen from '../../assets/img/category-kitchen.jpg';
import categoryLivingRoom from '../../assets/img/category-living-room.jpg';
import categoryOffice from '../../assets/img/category-office.jpg'
import {Link} from "react-router-dom";


const imgMap = {
    "category-living-room.jpg": categoryLivingRoom,
    "category-bedroom.jpg" : categoryBedroom,
    "category-kitchen.jpg" : categoryKitchen,
    "category-office.jpg": categoryOffice,


}

const CategoryCard = ({category}) => {
    const imgSet = imgMap[category.image];

    const getProductLabel = (count) => {
        if (count === 0) return "товаров";
        if (count === 1) return "товар";
        if (count >= 2 && count <= 4) return "товара";
        return "товаров"
    }
    return (
        <div>
            <Link to={`/category/${category.id}`} className={"popular-category-card"}>
                <div className="popular-img-wrapper">
                    <img src={imgSet} alt={category.name}/>
                </div>
                <div className="popular-card-info">
                    <h3>{category.name}</h3>
                    <span>{category.productCount} {getProductLabel(category.productCount)}</span>
                </div>
                <div className="popular-circle"></div>
            </Link>

        </div>
    );
};

export default CategoryCard;